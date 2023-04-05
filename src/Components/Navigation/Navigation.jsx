import './Navigation.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-default/default.css';

export default function Navigation() {
    const [user, setUser] = useState('');

    const signup = 'SIGN UP';

    useEffect(() => {
        if(localStorage.getItem('username')) {
            const getUser = localStorage.getItem('username');
            setUser(getUser);
        };

    }, [user]);

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
                    <Link className='linkStyle' to='/contact'><li>CONTACT</li></Link>
                    <Link className='linkStyle' to='/register'>
                        <div className='divIconUser'>
                            <svg className='svgPersonIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                            <li>{user === '' ? signup : user}</li>
                        </div>
                    </Link>
                    <Link className='linkStyle' to="/" onClick={async () => {
                        if(user !== '') {
                            localStorage.setItem('username', '');
                            window.location.reload();
                        }

                        else {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    toast.addEventListener('click', Swal.close)
                                }
                            })
                            
                            Toast.fire({
                                icon: 'warning',
                                title: 'Log in first!'
                            })
                        }
                        
                    }} ><li>LOG OUT</li></Link>
                </ul>
            </div>
        </section>
    )
};