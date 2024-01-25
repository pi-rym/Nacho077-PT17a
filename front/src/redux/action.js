import axios from 'axios'

export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const ERROR = "ERROR"

export const addFav = (character) => {
    return async function(dispatch){
        try {
            const {data} = await axios.post("http://localhost:3001/rickandmorty/favorites", character)
            
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const deleteFav = (id) => {
    return async function(dispatch){
        try {
            const {data} = await axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`)

            return dispatch({
                type: DELETE_FAV,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}