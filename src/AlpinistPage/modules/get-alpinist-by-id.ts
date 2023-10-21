import {IAlpinists} from "./../../models/alpinist"
import {alpinists as alps} from "./../../models/mock/alpinists"


export const getAlpinistById = async (id = ''): Promise<IAlpinists> => {
    return fetch(`/api/alpinist/${id}`)
        .then((response) => response.json())
        .catch(() => ({alpinist: alps[Number(id) - 1]}))
}
