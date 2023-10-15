import { FC, useState } from 'react'
import { getAlpinistById } from './modules/get-alpinist-by-id'
import { IAlpinists } from "./../models/alpinist"
import { useEffect } from 'react';
// import InputField from './components/InputField/InputField'
// import AlpinistCard from './components/AlpinistCard/AlpinistCard'
// import './AlpinistsPage.css'

import { useParams } from 'react-router-dom';


const IAlpinistPage: FC = () => {
    // let { id } = useParams();

    const [alpinist, setAlpinist] = useState<IAlpinists | null>(null)

    useEffect(() => {
        (async () => {
            const alpinist = await getAlpinistById('2')
            setAlpinist(alpinist)
        })()
    }, [alpinist]);

    if (!alpinist) {
        return <div>No data available.</div>;
    }
    
    return (
        <h1>{alpinist && <script>console.log(alpinist)</script>}</h1>

        // <div>

        //     <section>
        //         <h1>{alpinist.name}</h1>
        //         <div className="img">
        //             <a href="#">
        //                 <img src={alpinist.bigImageRef}
        //                     alt="Img" /></a>
        //         </div>
        //         {/* <div >
        //             {alpinist.description}
        //         </div> */}
        //     </section>

        //     {/* <div className="attribution">
        //         {alpinist.country}
        //     </div> */}
        // </div>
    )
}

export default IAlpinistPage
