import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'

const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites)

    return <Cards characters={favorites} />
}

export default Favorites