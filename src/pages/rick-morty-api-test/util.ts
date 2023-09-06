import type { Personaje } from "./interfaces";

const URL_API = 'https://rickandmortyapi.com/api/character/';

export const getPersonajeById = async (id: number): Promise<Personaje> => {
    const result = await fetch(URL_API + id)
    return await result.json()
}