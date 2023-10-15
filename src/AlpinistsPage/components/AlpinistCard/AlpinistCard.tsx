import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import './AlpinistCard.css'

interface Props {
    id: number
    country: string
    lifetime: string
    description: string
    imageRef: string
    bigImageRef: string
    name: string
}

const AlpinistCard: FC<Props> = ({ id, country, lifetime, description, imageRef, bigImageRef, name }) => (
    <div className="my-card-wrapper">
        <article className="my-card">
            <div className="my-card__img" style={{ backgroundImage: `url(${imageRef})` }}></div>
            <a href={"/alpinist/" + id} className="my-card_link">
                <div className="my-card__img--hover" style={{ backgroundImage: `url(${imageRef})` }}></div>
            </a>
            <div className="my-card__info">
                <span className="my-card__category">{country}</span>
                <h3 className="my-card__title">{name}</h3>
                <span className="my-card__by"><a href="#" className="my-card__author" title="author">{lifetime}</a></span>
            </div>
        </article>
        
        {/* <form action="/service/delete" method="POST">
            <button name="id" value="{{.ID}}"></button>
        </form> */}
    </div>
)

export default AlpinistCard;
