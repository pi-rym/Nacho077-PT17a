import { ADD_FAV, DELETE_FAV } from './action'

const initialState = {
    myFavorites: [],
    character: [],
    isLogged: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id != action.payload)
            }
        default:
            return {...state}
    }
}