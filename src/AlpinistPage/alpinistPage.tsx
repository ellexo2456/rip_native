import { FC, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
// import { IAlpinists, getAlpinistsByCountry } from './modules/get-alpinists-by-country'
// import { useEffect } from 'react';
// import InputField from './components/InputField/InputField'
// import AlpinistCard from './components/AlpinistCard/AlpinistCard'
// import './AlpinistsPage.css'

interface Props {
    id: number
    description: string

}

const IAlpinistPage: FC<Props> = ({ id, description }) => {
    // const [searchValue, setSearchValue] = useState('')

    // const [loading, setLoading] = useState(false)

    // const [alpinists, setAlpinists] = useState<IAlpinists[]>([])

    // const handleSearch = async () =>{
    //     await setLoading(true)
    //     const { alpinists } = await getAlpinistsByCountry()
    //     await setAlpinists(alpinists)
    //     // await setMusic(results.filter(item => item.wrapperType === "track"))
    //     await setLoading(false)
    // }

    // useEffect(() => {
    //     handleSearch()
    // }, []);

    return (
        <div>
            {id}
            {description}
        </div>
    )
}

export default IAlpinistPage
