const Card = ({character}) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.species}</p>
            <img src={character.image} alt="" />
            <button onClick={() => alert('cerrando personaje...')} >X</button>
        </div>
    )
}

export default Card
