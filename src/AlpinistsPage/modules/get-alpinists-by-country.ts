import { IAlpinists } from "./../../models/alpinist"

export interface IResult {
    alpinists: IAlpinists[]
}

export const getAlpinistsByCountry = async (name = ''): Promise<IResult> => {
    return fetch(`http://localhost:8080/?country=${name}`)
        .then((response) => response.json())
        .catch(() => ({ alpinists: [] }))
}
