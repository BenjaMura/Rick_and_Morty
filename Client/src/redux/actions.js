import axios from "axios";
import { ADD_FAV, REMOVE_FAV, GET_FAVORITES, FILTER, ORDER, RESET } from "./actions-types.js";

export const addFav = (character) => {
    /* return {
        type: ADD_FAV,
        payload: character,
    }; */
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            if (!data) throw Error ('No se pudo obtener o crear el favorito')
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const removeFav = (id) => {
    /* return {
        type: REMOVE_FAV,
        payload: id,
    }; */
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            if (!data) throw Error('No se pudo eliminar el favorito')
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getFavorites = () => {
    return async (dispatch) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        try {
            const { data } = await axios.get(endpoint);
            if (!data) throw Error();
            return dispatch({ type: GET_FAVORITES, payload: data})
        } catch (error) {
            alert("No hay favoritos");           
        }
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};

export const reset = () => {
    return {
        type: RESET
    };
};