import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, GET_FAVORITES } from './actions-types.js';

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    let sorted;
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload.id),
                allCharacters: state.allCharacters.filter((char) => char.id !== action.payload.id),
            };
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            };
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: 
                    action.payload === 'allCharacters'
                    ? [...state.allCharacters]
                    : allCharactersFiltered
            };
        case RESET:
            return {
                ...state,
                myFavorites: [...state.allCharacters],
            };
        case ORDER:
            if (action.payload === "Ascendente") {
                sorted = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
              } else {
                sorted = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
              }
        
              return {
                ...state,
                myFavorites: [...sorted],
              };    
            /* const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            }; */
        default:
            return {...state};
    };
};

export default rootReducer;