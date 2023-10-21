import React, {FC, useState} from 'react'
import {getAlpinistById} from './modules/get-alpinist-by-id'
import {IAlpinists} from "./../models/alpinist"
import {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap'

// import InputField from './components/InputField/InputField'
// import DeleteButton from './components/DeleteButton/DeleteButton'
import './alpinistPage.css'
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet';


const IAlpinistPage: FC = () => {
    let {id} = useParams();

    const [alpinist, setAlpinist] = useState<IAlpinists | null>(null);


    useEffect(() => {
        (async () => {
            // @ts-ignore
            const {alpinist} = await getAlpinistById(id);
            setAlpinist(alpinist);
        })()
    }, []);

    if (!alpinist) {
        return <div>No data available.</div>;
    }

    return (
        <div className={"alpinist-page"}>
            <Helmet>
                <style>{'body { background-color: #868686; }'}</style>
            </Helmet>

            <div className={"content__wrapper"}>
                <Row className={"content__box"}>
                    <Col>

                    </Col>
                    <Col xs={4} className={"content__column"}>
                        <a href="#">
                            <img src={alpinist.bigImageRef} alt="Img" className={"content__image"}/>
                        </a>
                    </Col>
                    <Col xs={5} className={"me-5 content__column"}>
                        <div className={"content__header"}>
                            {alpinist.name}
                        </div>
                        <div className={"content"}>
                            {alpinist.description}
                        </div>
                    </Col>
                </Row>

                <div className="content__attribution">
                    {alpinist.country}
                </div>
            </div>
        </div>
    )
}

export default IAlpinistPage
