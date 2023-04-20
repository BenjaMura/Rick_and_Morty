import { Link } from 'react-router-dom';
import stylesCard from './Card.module.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions.js';
import { useState, useEffect } from 'react';

function Card({
   id,
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose,
   }) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const {myFavorites} = useSelector((select) => select)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
         }));
      };
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   function superClose() {
      onClose(id);
      dispatch(removeFav(id));
   };

   return (
      <div className={stylesCard.div}>
         <button onClick={superClose}>X</button>
         {/* <h2>Id: {id}</h2> */}
         <br></br>
         <img src={image} alt='' />
         <Link style={{ textDecoration: 'none' }} to={`/detail/${id}`} >
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         {isFav ? (
            <button className={stylesCard.btn} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={stylesCard.btn} onClick={handleFavorite}>🤍</button>
         )}
         {/* <h2>Origin: {origin}</h2> */}
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);