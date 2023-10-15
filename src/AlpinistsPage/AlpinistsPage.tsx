import { FC, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { getAlpinistsByCountry } from './modules/get-alpinists-by-country'
import { IAlpinists } from "./../models/alpinist"
import { useEffect } from 'react';
import InputField from './components/InputField/InputField'
import AlpinistCard from './components/AlpinistCard/AlpinistCard'
import './AlpinistsPage.css'

const IAlpinistsPage: FC = () => {
    const [searchValue, setSearchValue] = useState('')

    const [loading, setLoading] = useState(false)

    const [alpinists, setAlpinists] = useState<IAlpinists[]>([])

    const handleSearch = async () => {
        await setLoading(true)
        const { alpinists } = await getAlpinistsByCountry()
        await setAlpinists(alpinists)
        // await setMusic(results.filter(item => item.wrapperType === "track"))
        await setLoading(false)
    }

    useEffect(() => {
        handleSearch()
    }, []);

    return (
        <div className={`my-container ${loading && 'containerLoading'}`}>
            {loading && <div className="loadingBg"><Spinner animation="border" /></div>}

            <InputField
                value={searchValue}
                setValue={(value) => setSearchValue(value)}
                loading={loading}
                onSubmit={handleSearch}
            />

            {/* {!alpinists.length && <div>
                <h1>К сожалению, пока ничего не найдено :(</h1>
            </div>} */}

            <Row xs={4} md={4} className="g-4">
                {alpinists.map((item, index) => (
                    <Col key={index} className="">
                        <AlpinistCard {...item} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default IAlpinistsPage
