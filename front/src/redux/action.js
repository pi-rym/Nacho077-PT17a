import axios from 'axios'

export const ADD_FAV = "ADD_FAV"
export const DELETE_FAV = "DELETE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

export const addFav = (character) => {
    return function(dispatch){
        axios.post("http://localhost:3001/rickandmorty/favorites", character)
        .then(({data}) => {
            return dispatch({
                type: ADD_FAV,
                payload: data
            })
        })
    }
}

export const deleteFav = (id) => {
    return function(dispatch){
        axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`)
        .then(({data}) => {
            return dispatch({
                type: DELETE_FAV,
                payload: data
            })
        })
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