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
                localStorage.setItem('username', user.username);
            }
    
            catch (err) {
                console.log(`ERR! ${err}`);
            }
        }

        getData();

    }, [user.username]);

    return (
        <section className='sectionNavigation'>
            <div className='divTitle'>
                <p className='logoStyle'>W</p>
                <Link className='titleStoreLink' to='/'><p>Warsen</p></Link>
            </div>
            <div className='divNav'>
                <ul className='divNavLinks'>
                    <Link className='linkStyle' to='/'><li>HOME</li></Link>
                    <Link className='linkStyle' to='/cart'><li>CART</li></Link>
                    <Link className='linkStyle' to='/chat'><li>CONTACT</li></Link>
                    <Link className='linkStyle' to='#'>
                        <div className='divIconUser'>
                                <svg className='bi bi-person-fill svgPersonIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg>
                                <li>{user.username}</li>
                        </div>
                    </Link>
                    <Link className='linkStyle' to="/" onClick={() => {
                            localStorage.setItem('username', '');
                        }
                    }><li>LOG OUT</li></Link>
                </ul>
            </div>
        </section>
    )
};