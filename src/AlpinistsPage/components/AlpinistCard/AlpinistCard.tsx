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

// const AlpinistCard: FC<Props> = ({ id, country, lifetime, description, imageRef, bigImageRef, name }) => (
//     // <Card className="card" style={{backgroundImage: `url(${imageRef})`}}>
//     <Card className="card">

//         {/* <Card.Img className="cardImage" src={imageRef} height={100} width={100}  /> */}
//         <Card.Body style={{ backgroundImage: `url(${imageRef})` }}>


//             <div className="card__img" style={{backgroundImage: `url(${imageRef})`}}></div>
//             <a href={"/service/" + id} className="card_link">
//                 <div className="card__img--hover" style={{ backgroundImage: `url(${imageRef})` }}></div>
//             </a>


//             <div className="textStyle">
//                 <Card.Title>{name}</Card.Title>
//             </div>
//             <div className="textStyle">
//                 <Card.Subtitle>{country}</Card.Subtitle>
//             </div>
//             <div className="textStyle">
//                 <Card.Text>
//                     {description}
//                 </Card.Text>
//             </div>
//             <Button className="cardButton" variant='custom' href={"/alpinist/" + id} target="_blank">Перейти</Button>
//         </Card.Body>
//     </Card>
// )

const AlpinistCard: FC<Props> = ({ id, country, lifetime, description, imageRef, bigImageRef, name }) => (
    <div className="my-card-wrapper">
        <article className="my-card">
            <div className="my-card__img" style={{ backgroundImage: `url(${imageRef})` }}></div>
            <a href={"/service/" + id} className="my-card_link">
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
