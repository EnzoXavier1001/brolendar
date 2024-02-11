import * as C from './styles'
import DataTable from 'react-data-table-component';

import { Header } from "../../components/Header"

import { useParty } from "../../hook/useParty"

import { Party } from '../../types/party'

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
        selector: (row: Party) => row.name
    },
    {
        name: 'Data de Início',
        selector: (row: Party) => row.dt_start
    },
    {
        name: 'Data de Término',
        selector: (row: Party) => row.dt_end
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
]

export const Home = () => {
   const { allParties } = useParty()

    return (
        <>
            <Header />
            <C.HomeSection>
                <C.HomeContainer>
                    <h1>Todos os eventos</h1>

                    <DataTable
                        columns={columns}
                        data={allParties}
                        pagination
                    />
                </C.HomeContainer>
            </C.HomeSection>
        </>
    )
}