import './Navigation.css';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <section>
            <div className='divTitle'>
                <p className='logoStyle'>W</p>
                <Link className='titleStoreLink' to='/' reloadDocument><p>Warsen</p></Link>
            </div>
            <div className='divNav'>
                <ul className='divNavLinks'>
                    <Link className='linkStyle' to='#'><li>HOME</li></Link>
                    <Link className='linkStyle' to='#'><li>CART</li></Link>
                    <Link className='linkStyle' to='#'><li>LOG IN</li></Link>
                </ul>
            </div>
        </section>
    )
};