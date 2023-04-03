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
        <section>
            <div className='divTitle'>
                <p className='logoStyle'>W</p>
                <Link className='titleStoreLink' to='/'><p>Warsen</p></Link>
            </div>
            <div className='divNav'>
                <ul className='divNavLinks'>
                    <Link className='linkStyle' to='/'><li>HOME</li></Link>
                    <Link className='linkStyle' to='/cart'><li>CART</li></Link>
                    <Link className='linkStyle' to='/register'><li>{user === '' ? signup : user}</li></Link>
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