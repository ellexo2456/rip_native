import {FC} from 'react'
import {Button} from 'react-bootstrap'
import './DeleteButton.css'

interface Props {
    onSubmit: () => Promise<void>
    buttonTitle?: string
}

const DeleteButton: FC<Props> = ({onSubmit, buttonTitle = 'Удалить'}) => (
    <div className="delete-button">
        <Button onClick={onSubmit} variant='custom'>{buttonTitle}</Button>
    </div>
)

export default DeleteButton;
