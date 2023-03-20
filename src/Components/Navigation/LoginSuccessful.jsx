import './Navigation.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginSuccessful() {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const getUser = await axios.get('http://localhost:8081/api/users/auth/login');
                setUser(getUser.data);
            }
    
            catch (err) {
                console.log(`ERR! ${err}`);
            }
        }

        getData();

    }, []);

    console.log(user);

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
                    <Link className='linkStyle' to='#'><li>{user.username}</li></Link>
                </ul>
            </div>
        </section>
    )
};