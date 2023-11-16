const Card = ({character, onClose}) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.species}</p>
            <img src={character.image} alt="" />
            <button onClick={() => onClose(character.id)}>X</button>
        </div>
    )
}

export default Card
