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
import { MdSportsBasketball } from "react-icons/md";
import { MdFestival } from "react-icons/md";

import { FaHome } from "react-icons/fa";

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
        cell: (row: Party) => <td title='Ir para a página do evento'><Link to={`/evento/${row.id}`}><FaExternalLinkAlt color='#DD9700' size={16}/></Link></td>
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

    function handleSelectCategory(category: string) {
        if(category != 'all') {
            const partiesFiltered = allParties.filter(parties => parties.category === category)
            setFilteredParties(partiesFiltered)
        } else {
            setFilteredParties(allParties)
        }
    }

    return (
        <>
            <Header />
            <C.HomeSection>
                <C.HomeContainer>
                    <C.CategoryGroup>
                        <h2>Categorias</h2>
                        <C.CategoryButtonWrapper>
                            <C.CategoryCard onClick={() => handleSelectCategory('all')}>
                                <C.CategoryCardDiv>
                                    <FaHome size={32} />
                                </C.CategoryCardDiv>
                                <p>Todas</p>
                            </C.CategoryCard>
                            <C.CategoryCard onClick={() => handleSelectCategory('Esportes')}>
                                <C.CategoryCardDiv>
                                    <MdSportsBasketball size={32} />
                                </C.CategoryCardDiv>
                                <p>Esportes</p>
                            </C.CategoryCard>
                            <C.CategoryCard onClick={() => handleSelectCategory('Cultura')}>
                                <C.CategoryCardDiv>
                                    <FaHome size={32} />
                                </C.CategoryCardDiv>
                                <p>Cultura</p>
                            </C.CategoryCard>
                            <C.CategoryCard onClick={() => handleSelectCategory('Festival')}>
                                <C.CategoryCardDiv>
                                    <MdFestival size={32} />
                                </C.CategoryCardDiv>
                                <p>Festival</p>
                            </C.CategoryCard>
                        </C.CategoryButtonWrapper>
                        
                    </C.CategoryGroup>
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