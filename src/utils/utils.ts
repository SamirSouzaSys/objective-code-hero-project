import md5 from 'md5'

import { CharacterDataWrapper } from "@/types/marvels";

const API_BASE_URL = process.env.API_BASE_URL
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY

const getTimeStamp = () => Date.now().toString()
const getHash = (timeStamp: string) => md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

const timeStamp = getTimeStamp()
const hash = getHash(timeStamp)
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T>(response: Response) => {
    if(!response.ok)
        throw new Error(response.statusText)

        const data = await response.json()
        return data.data as T
}

export const getCharacters = async (): Promise<CharacterDataWrapper> => {
    const url = `${API_BASE_URL}/characters?limit=10&${query}`
    const response = await fetch(url)

    return handleResponse<CharacterDataWrapper>(response)
}