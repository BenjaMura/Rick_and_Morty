import SearchBar from '../SearchBar/SearchBar';
import { Link, } from 'react-router-dom';
import stylesNav from './Nav.module.css';

export default function Nav({ onSearch, setAccess }) {
   const handleLogOut = () => {
      setAccess(false);
   }
   
   return (
      <nav className={stylesNav.nav}>
         <button className={stylesNav.btn}>
            <Link to='/about' style={{textDecoration: 'none'}} >About</Link>
         </button>
         <button className={stylesNav.btn}>
            <Link to='/home' style={{textDecoration: 'none'}} >Home</Link>
         </button>
         <button className={stylesNav.btn}>
            <Link to='/favorites' style={{textDecoration: 'none'}} >Favorites</Link>
         </button>
         <button className={stylesNav.btn} onClick={handleLogOut}>Log Out</button>
         <SearchBar onSearch={onSearch}/>
      </nav>
   );
}