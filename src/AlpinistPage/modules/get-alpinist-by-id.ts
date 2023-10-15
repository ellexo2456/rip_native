import { IAlpinists } from "./../../models/alpinist"


export const getAlpinistById = async (id = ''): Promise<IAlpinists> =>{
    return fetch(`http://localhost:8080/alpinist/${id}`)
        .then((response) => response.json())
        .catch(()=> ({ alpinist: null }))
}
