export interface IAlpinists {
    wrapperType: string
    id: number
    country: string
    lifetime: string
    description: string
    imageRef: string
    bigImageRef: string
    name: string
}

export interface IResult {
    alpinists: IAlpinists[]
}

export const getAlpinistsByCountry = async (name = ''): Promise<IResult> =>{
    return fetch(`http://localhost:8080/?name=${name}`)
        .then((response) => response.json())
        .catch(()=> ({ resultCount:0, results:[] }))
}
