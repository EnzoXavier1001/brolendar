import { useState, useEffect } from "react"
import { api } from "../services/api"

import { Party } from '../types/party'

export const useParty = () => {
    const [allParties, setAllParties] = useState<Party[]>([])

    useEffect(() => {
        async function getAllParties() {
            try {
                const { data } = await api.get('/evento')
                setAllParties(data)
            } catch (error) {
                throw new Error
            }
        }

        getAllParties()
    }, [])

    return {
        allParties
    }
}