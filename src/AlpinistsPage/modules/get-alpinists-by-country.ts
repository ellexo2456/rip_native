export interface IAlpinists {
    wrapperType: string
    country: string
    lifetime: string
    description: string
    imageRef: string
    bigImageRef: string
    name: string
}

export interface IResult {
    resultCount: number
    results: IAlpinists[]
}

export const getAlpinistsByCountry = async (name = ''): Promise<IResult> =>{
    return fetch(`http://localhost:8080/?name=${name}`)
        .then((response) => response.json())
        .catch(()=> ({ resultCount:0, results:[] }))
}
