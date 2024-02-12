import { useParams } from 'react-router-dom'
import * as C from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Header } from '../../components/Header'
import { Party as PartyType } from '../../types/party'
import { FaCalendarAlt } from "react-icons/fa";

import backgroundParty from '../../assets/background-party.jpg'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IoLocationSharp } from "react-icons/io5";

export const Party = () => {
    const { id } = useParams()
    const [party, setParty] = useState<PartyType>({})

    useEffect(() => {
        async function getParty() {
            try {
                const { data } = await api.get(`/evento/${id}`)
                const startDateFormatted = format(data.dt_start, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })
                const endDateFormatted = format(data.dt_end, "dd 'de' MMMM 'de' yyyy 'até' HH:mm", { locale: ptBR })

                setParty({...data, dt_start: startDateFormatted, dt_end: endDateFormatted})
            } catch (error) {
                console.log(error)
            }
        }

        getParty()
    }, [])

    return (
        <>
            <Header />
            <C.PartySection>
                <C.ContainerImg></C.ContainerImg>
                <C.PartyContainer>
                    <img src={backgroundParty} alt="" />

                    <C.PartContent>
                        <header>
                            <h1>{party.name} | {party.category}</h1>
                            <p>Organizado por: <span><strong>Enzo Costa</strong></span></p>
                        </header>
                        <C.PartyInfo>
                            <C.PartyDate>
                                <FaCalendarAlt />
                                <time>{party.dt_start} - {party.dt_end}</time>
                            </C.PartyDate>
                            <C.PartyLocation>
                                <IoLocationSharp />
                                {party.location}
                            </C.PartyLocation>
                        </C.PartyInfo>
                        <p>{party.description}</p>  
                    </C.PartContent>
                </C.PartyContainer>
            </C.PartySection>
        </>
    )
}