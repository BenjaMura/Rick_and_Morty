import { useState } from 'react';
import validation from '../Validation/Validation.js';
import stylesForm from './Form.module.css';

export default function Form ({login}) {
    const [errors, setErrors] = useState({});
    
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };
    
    return (
        <form className={stylesForm.form_login} onSubmit={handleSubmit}>
            <label htmlFor='title' className={stylesForm.labels}>Access App Rick and Morty</label>
            <hr></hr>
            <div>
                <label htmlFor='email' className={stylesForm.labels}>Email</label>
                <br></br>
                <input className={stylesForm.inputs} name='email' placeholder='Email...' type='text' value={userData.email} onChange={handleChange}></input>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor='password' className={stylesForm.labels}>Password</label>
                <br></br>
                <input className={stylesForm.inputs} name='password' placeholder='Password...' type='text' value={userData.password} onChange={handleChange}></input>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>
            <br></br>
            <button className={stylesForm.submit}>Submit</button>
        </form>
    );
}