import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import './AlpinistCard.css'

interface Props {
    wrapperType: string
    id: number
    country: string
    lifetime: string
    description: string
    imageRef: string
    bigImageRef: string
    name: string
}

const AlpinistCard: FC<Props> = ({ id, country, lifetime, description, imageRef, bigImageRef, name }) => (
    <div>
        <section>
            <h1>{name}</h1>
            <div className="img">
                <a href="#"><img src="{{.alpinist.BigImageRef}}"
                    alt="Img"/></a>
            </div>
            <div className="content">
                {description}
            </div>
        </section>

        <div className="attribution">
            {country}
        </div>
    </div>
)

export default AlpinistCard;
