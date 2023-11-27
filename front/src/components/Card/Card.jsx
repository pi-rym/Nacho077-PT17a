import { Link } from 'react-router-dom'
import s from './Card.module.scss'

const Card = ({character, onClose}) => {
    return (
        <div className={s.containerCard}>
            <div className={s.containerInfo}>
                <div className={s.containerImg}>
                    <img className={s.img} src={character.image} alt="" />
                </div>
                <div className={s.containerData}>
                    <Link to={`/detail/${character.id}`} ><h1 className={s.title}>{character.name}</h1></Link>
                    <p className={s.data}>{character.species} - {character.status}</p>
                    <p className={s.data}>{character.gender}</p>
                    <p className={s.data}>{character.origin.name}</p>
                </div>
            </div>
            {onClose && <button className={s.button} onClick={() => onClose(character.id)}>X</button>}
            <h1 className={s.containerId}>#{character.id}</h1>
        </div>
    )
}

export default Card
