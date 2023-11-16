import Card from './Card.jsx'

const Cards = (props) => {
    return(
        <div>
            {props.characters.map((c) => (
                <Card character={c} key={c.id} onClose={props.onClose} />
            ))}
        </div>
    )
}

export default Cards
