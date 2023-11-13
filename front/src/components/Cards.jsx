import Card from './Card.jsx'

const Cards = (props) => {
    return(
        <div>
            {props.characters.map((c) => (
                <Card character={c} key={c.id} />
            ))}
        </div>
    )
}

export default Cards
