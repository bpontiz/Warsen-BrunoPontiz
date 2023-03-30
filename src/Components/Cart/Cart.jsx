import './Cart.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../../Multimedia/shopping-cart.png';
import emptyCart from '../../Multimedia/emptyCart.jpg';

export default function Cart() {

    const [ cart, setCart ] = useState([]);

    if( cart.length === 0 ) {
        return <>
            <div className='cartDivStyle'>
                <p className='mainpCart'>Your cart is empty</p>
                <Link to="/" className='linkGoShopping'><p className='pGoShopping'>Go shopping ➡</p></Link>
                <img src={emptyCart} alt="shoppingCart" className='emptyCartImg' />
            </div>
        </>
    };

    return <>
        <div className='cartDivStyle'>
            <img src={ShoppingCart} alt="shoppingCart" className='shoppingCartImg' />
            <p className='mainpCart'>Cart</p>
        </div>
    </>
};