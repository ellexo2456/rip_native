import { IAlpinists } from "./../../models/alpinist"
import { alpinists as alps} from "./../../models/mock/alpinists"

export interface IResult {
    alpinists: IAlpinists[]
}

export const getAlpinistsByCountry = async (name = ''): Promise<IResult> => {
    return fetch(`/api/?country=${name}`)
        .then((response) => response.json())
        .catch(() => ({ alpinists: alps }))
}
