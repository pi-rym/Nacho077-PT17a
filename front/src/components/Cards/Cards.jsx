import Card from '../Card/Card.jsx'
import s from './Cards.module.scss'

const Cards = (props) => {
    return(
        <div className={s.containerCards}>
            {props.characters.map((c) => (
                <Card character={c} key={c.id} onClose={props.onClose} />
            ))}
        </div>
    )
}

export default Cards
