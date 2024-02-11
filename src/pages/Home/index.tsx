import * as C from './styles'
import DataTable from 'react-data-table-component';

import { Header } from "../../components/Header"

import { useParty } from "../../hook/useParty"

import { format } from 'date-fns';

import { Party } from '../../types/party'
import { useEffect, useState } from 'react';

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
    },
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
                            <h1>Todos os eventos</h1>
                        </div>
                        <input type="text" value={searchInput} onChange={(e) => handleSearchInput(e.target.value)} />
                    </C.HomeHeader>

                    <DataTable
                        columns={columns}
                        data={filteredParties}
                        pagination
                    />
                </C.HomeContainer>
            </C.HomeSection>
        </>
    )
}