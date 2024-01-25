import { ADD_FAV, DELETE_FAV, FILTER, ORDER, ERROR } from './action'

const initialState = {
    myFavorites: [],
    character: [],
    allCharacters: [],
    isLogged: false,
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            let copy1 = action.payload;
            // copy1.push([...action.payload]);
            return {
                ...state,
                myFavorites: copy1,
                allCharacters: copy1,
            }
        case DELETE_FAV:
            // let copy3 = state.myFavorites.filter((char) => {
            //     return char.id !== Number(action.payload);
            // })
            let copy3 = action.payload
            return {
                ...state,
                myFavorites: copy3,
                allCharacters: copy3,
            }
        case FILTER:
            if (action.payload === "Any") {
                return {...state, myFavorites: state.allCharacters}
            }

            const charFilter = state.allCharacters.filter((char) => {
                return char.gender === action.payload;
            });
        
            return {
                ...state,
                myFavorites: charFilter,
            };
            // let copy2 = state.allCharacters.filter((char) => {
            //     return char.gender === action.payload; // Payload que es un género.
            // })
            // return {
            //     ...state,
            //     myFavorites: copy2,
            // }
        case ORDER:
            let orderedChars = state.allCharacters.sort((a, b) =>
                action.payload === "A" ? a.id - b.id : b.id - a.id
            )
            return {
                ...state,
                myFavorites: orderedChars,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {...state}
    }
}