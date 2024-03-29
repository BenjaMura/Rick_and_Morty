import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'a4c1bfc1bcb8.f0289e75f09bae55aade';
// const email = 'benjaminmuratore1@gmail.com';
// const password = 'asd123';
// const URL = 'https://be-a-rym.up.railway.app/api/character/7?key=a4c1bfc1bcb8.f0289e75f09bae55aade';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert('Las credenciales son incorrectas');
      }
   }
   
   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]);
   
   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            const foundChar = characters.filter((char) => char.id === data.id);
            if (foundChar.length > 0) throw Error;
            else setCharacters((oldChars) => [...oldChars, data]);
         };    
      } catch (error) {
         alert('¡No hay personajes con este ID o el mismo ya fue agregado!');
      }
      // .then(({ data }) => {
      //    if (data.name && !characters.find((char) => char.id === data.id)) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } else {
      //       alert('Algo salió mal');
      //    }
      // });
   };
   
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== id)
      setCharacters(charactersFiltered)
   };
   
   return (
      <div className='App'>
         {location.pathname !== '/' ? <Nav onSearch={onSearch} setAccess={setAccess}/> : null}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}
export default App;