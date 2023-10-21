import { IAlpinists } from "./../../models/alpinist"

export interface IResult {
    alpinists: IAlpinists[]
}

export const deleteAlpinist = async (id = '') => {
    return fetch(`/api/alpinist/delete?id=${id}`, {method: 'POST'})
}
