import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import './AlpinistCard.css'

interface Props {
    wrapperType: string
    country: string
    lifetime: string
    description: string
    imageRef: string
    bigImageRef: string
    name: string
}

const AlpinistCard: FC<Props> = ({country, lifetime, description, imageRef, bigImageRef, name}) => (
    <Card className="card">
        <Card.Img className="cardImage" variant="top" src={imageRef} height={100} width={100}  />
        <Card.Body>                
            <div className="textStyle">
                <Card.Title>{name}</Card.Title>
            </div>
            <div className="textStyle">
                <Card.Text>
                    {description}
                </Card.Text>
            </div>
            <Button className="cardButton" href="#" target="_blank" variant="primary">Открыть в ITunes</Button>
        </Card.Body>
    </Card>
)

export default AlpinistCard;
