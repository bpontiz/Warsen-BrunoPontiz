import './Navigation.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [user, setUser] = useState('');

    const login = 'LOGIN';

    useEffect(() => {
        const getUser = localStorage.getItem('username');
        setUser(getUser);

    }, []);

    return (
        <section>
            <div className='divTitle'>
                <p className='logoStyle'>W</p>
                <Link className='titleStoreLink' to='/'><p>Warsen</p></Link>
            </div>
            <div className='divNav'>
                <ul className='divNavLinks'>
                    <Link className='linkStyle' to='/'><li>HOME</li></Link>
                    <Link className='linkStyle' to='#'><li>CART</li></Link>
                    <Link className='linkStyle' to='/registered'><li>{user === '' ? login : user}</li></Link>
                </ul>
            </div>
        </section>
    )
};