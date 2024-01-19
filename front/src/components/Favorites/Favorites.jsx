import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orderCards, filterCards } from '../../redux/action'
import Cards from '../Cards/Cards'

const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch()
    let [aux, setAux] = useState(false)
  
    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value))
      setAux(!aux)
    };
  
    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <section>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Any">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </section>
            <Cards characters={favorites} />
        </div>
    )
}

export default Favorites