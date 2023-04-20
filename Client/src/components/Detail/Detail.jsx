import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import stylesDetail from './Detail.module.css';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'a4c1bfc1bcb8.f0289e75f09bae55aade';

export default function Detail () {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)        
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
     return (
        <div className={stylesDetail.div}>
            <div>
               <img src={character?.image} alt={character?.name}/>
            </div>
            <div>
               <h2>NAME | {character?.name}</h2>
               <h2>STATUS | {character?.status}</h2>
               <h2>SPECIE | {character?.species}</h2>
               <h2>GENDER | {character?.gender}</h2>
               <h2>ORIGIN | {character?.origin?.name}</h2>
            </div>
        </div>
    )
}