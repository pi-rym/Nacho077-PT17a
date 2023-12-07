import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFav, deleteFav } from '../../redux/action'
import s from './Card.module.scss'
import { useEffect } from 'react'

const Card = ({character, onClose}) => {
    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.myFavorites)

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false)
            dispatch(deleteFav(character.id))
        } else {
            setIsFav(true)
            dispatch(addFav(character))
        }
    }

    useEffect(() => {
        for ( let i = 0; i < favorites.length; i++) {
            if (favorites[i].id == character.id) {
                setIsFav(true)
            }
        }
    }, [])

    const handleClose = () => {
        onClose(character.id)
        dispatch(deleteFav(character.id))
    }

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
            <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
            {onClose && <button className={s.button} onClick={handleClose}>X</button>}
            <h1 className={s.containerId}>#{character.id}</h1>
        </div>
    )
}

export default Card
