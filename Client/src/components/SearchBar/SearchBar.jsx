import {useState} from 'react';
import stylesSB from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={stylesSB.sb}>
         <input className={stylesSB.inp} type='search' onChange={handleChange} value={id} placeholder='Number between 1 and 826' />
         <button className={stylesSB.btn} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
