import author from '../../img/BenjaMura.jpeg';
import stylesAbout from './About.module.css';

export default function About() {
    return (
        <div className={stylesAbout.div}>
            <h1 className={stylesAbout.h1}>Created by</h1>
            <img className={stylesAbout.img} src={author} alt='BenjaMura' ></img>
            <h2 className={stylesAbout.h2}>Benjamín Muratore</h2>
            <h3 className={stylesAbout.h3}>Developer in progress</h3>
        </div>
    )
}