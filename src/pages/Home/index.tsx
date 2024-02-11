import * as C from './styles'
import DataTable from 'react-data-table-component';

import { Header } from "../../components/Header"

import { useParty } from "../../hook/useParty"

import { format } from 'date-fns';

import { Party } from '../../types/party'
import { useEffect, useState } from 'react';
import { IoIosPaper } from "react-icons/io";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const partyStatus = [
    'Criado',
    'Cancelado',
    'Em andamento',
    'Finalizado'
]

function getStatus(status: number) {
    return (
        <C.StatusStyles $status={status}>
            {partyStatus[status]}
        </C.StatusStyles>
    )
}

const columns = [
    {
        name: 'Nome',
        selector: (row: Party) => row.name,
    },
    {
        name: 'Data de Início',
        selector: (row: Party) => row.dt_start,
        format: (row: Party) => format(row.dt_start, 'dd-MM-yyyy')
    },
    {
        name: 'Data de Término',
        selector: (row: Party) => row.dt_end,
        format: (row: Party) => format(row.dt_start, 'dd-MM-yyyy')
    },
    {
        name: 'Categoria',
        selector: (row: Party) => row.category
    },
    {
        name: 'Status',
        selector: (row: Party) => row.status,
        format: (row: Party) => partyStatus[row.status],
        cell: (row: Party) => getStatus(row.status)
    },
    {
        name: 'Ações',
        cell: (row: Party) => <td title='Ir para a página do evento'><Link to={`evento/${row.id}`}><FaExternalLinkAlt color='#DD9700' size={16}/></Link></td>
    }
]

export const Home = () => {
    const [searchInput, setSearchInput] = useState<string>('')
    const { allParties } = useParty()
    const [filteredParties, setFilteredParties] = useState<Party[]>([]);

    useEffect(() => {
        if (searchInput !== '') {
            const partiesFiltered = allParties.filter(parties => parties.name.includes(searchInput))
            setFilteredParties(partiesFiltered);
        } else {
            setFilteredParties(allParties); 
        }
    }, [searchInput, allParties]);

    function handleSearchInput(value: string) {
        setSearchInput(value);
    }

    return (
        <>
            <Header />
            <C.HomeSection>
                <C.HomeContainer>
                    <C.HomeHeader>
                        <div>
                            <IoIosPaper size={24} color='#DD9700' />
                            <h1>Todos os eventos</h1>
                        </div>
                        <C.WrapperInput>
                            <input placeholder='Encontre um evento' type="text" value={searchInput} onChange={(e) => handleSearchInput(e.target.value)} />
                            <FaSearch color="#966502" style={{ position: 'absolute', right: '5%', top: '24%'}}/>
                        </C.WrapperInput>
                    </C.HomeHeader>

                    <DataTable
                        columns={columns}
                        data={filteredParties}
                        pagination
                        noDataComponent="Parece que não encontramos o que você está buscando. Que tal tentar algo novo?"
                    />
                </C.HomeContainer>
            </C.HomeSection>
        </>
    )
}