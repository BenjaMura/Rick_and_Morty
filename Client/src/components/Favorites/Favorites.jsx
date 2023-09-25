/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import stylesFavorites from './Favorites.modules.css'
import { removeFav, orderCards, filterCards, reset, getFavorites } from "../../redux/actions.js";

const Favorites = ({ onClose }) => {
    const favorites = useSelector( (state) => state.myFavorites);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (!favorites.length) dispatch(getFavorites());
    }, []);

    function closeFav(id) {
        onClose(id);
        dispatch(removeFav(id));
    };

    function handleOrder (event) {
        event.preventDefault();
        const {value} = event.target;
        dispatch(orderCards(value));
    };
    
    function handleFilter (event) {
        event.preventDefault();
        const {value} = event.target;
        dispatch(filterCards(value));
    };

    function resetBtn () {
        dispatch(reset())
    };

    return (
        <div className={stylesFavorites.div}>
            <br/>
            <select style={{width: '15rem', height: '2rem'}} onChange={handleOrder} name='order' defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled>Select Order</option>
                <option value='Ascendente'>Ascendente</option>
                <option value='Descendente'>Descendente</option>
            </select>
            <select style={{width: '15rem', height: '2rem'}} onChange={handleFilter} name='filter' defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            <button onClick={resetBtn}>Reset</button>
            <br/>
            <br/>
            {favorites.map(({id, name, status, species, gender, origin, image}) => {
                return (
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                    onClose={() => closeFav(id)}
                />
                );
            })}
        </div>
    )
};

export default Favorites;