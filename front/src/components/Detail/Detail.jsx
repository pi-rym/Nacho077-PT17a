import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import s from './Detail.module.scss'
import { APIKEY } from "../../utils"

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState()

    useEffect(() =>  {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
        .then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
            }
        );
    }, [])

    return character ? (
        <div className={s.containerInfo}>
            <div className={s.containerImg}>
                <img className={s.img} src={character.image} alt="" />
            </div>
            <div className={s.containerData}>
                <h1 className={s.title}>{character.name}</h1>
                <p className={s.data}>{character.species} - {character.status}</p>
                <p className={s.data}>{character.gender}</p>
                <p className={s.data}>{character.origin.name}</p>
            </div>
        </div>
    ) : <h1>CARGANDO...</h1>
}

export default Detail
