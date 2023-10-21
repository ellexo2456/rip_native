import { IAlpinists } from "./../../models/alpinist"

export interface IResult {
    alpinists: IAlpinists[]
}

export const deleteAlpinist = async (id = '') => {
    return fetch(`http://localhost:8080/alpinist/delete?id=${id}`, {method: 'POST'})
}
