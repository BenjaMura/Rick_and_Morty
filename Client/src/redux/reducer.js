import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from './actions-types.js';

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                // myFavorites: [...state.allCharacters, action.payload],
                // allCharacters: [...state.allCharacters, action.payload]
                myFavorites: action.payload,
                allCharacters: action.payload,
            };
        case REMOVE_FAV:
            return {
                ...state,
                // myFavorites: state.allCharacters.filter(
                //     (char) => char.id !== action.payload),
                // allCharacters: state.allCharacters.filter(
                //     (char) => char.id !== action.payload),
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
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    action.payload === 'Ascendente'
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
            };
        default:
            return {...state};
    };
};

export default rootReducer;