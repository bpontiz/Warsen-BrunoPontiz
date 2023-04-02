import './Cart.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../../Multimedia/shopping-cart.png';
import emptyCart from '../../Multimedia/emptyCart.jpg';
import axios from 'axios';

export default function Cart() {

    const [ cart, setCart ] = useState([]);

    useEffect(() => {
        async function modifyCart() {
            const getUser = localStorage.getItem('username');

            if(getUser !== '') {
                const getUserData = await axios.get('http://localhost:8081/api/users/auth/login');

                const getCart = await axios.get(`http://localhost:8081/api/carts/filter/${getUserData.data.email}`);

                return setCart(getCart.data);
            };

            return cart;
        }

        modifyCart();
    });

    if( cart.length !== 0 ) {
        return <>
            <div className='divNoEmptyCart'>
                <img src={ShoppingCart} alt="shoppingCart" className='shoppingCartImg' />
                <p className='mainpCart'>Cart</p>
            </div>
            <div className='divMapCartHead'>
                <div className='divMapCartSub'>
                    <p className='pMapCartSubImg'>Image</p>
                    <p className='pMapCartSubProduct'>Product</p>
                </div>            
                <p className='pMapCartSubPrice'>Price</p>
            </div>
            <div className='divMapCart'>
                {
                    cart.map(product => <>
                        <div className='divMapCartItems'>
                            <div className='divMapCartShirtList'>
                                <img className='imgMapCart' src={product.items.image} alt="Football Shirt" />
                                <ul className='ulMapCart'>
                                    <li className='liMapCart itemName'>{product.items.name}</li>
                                    <li className='liMapCart quantity'>Quantity: {product.items.quantity}</li>
                                    <li className='liMapCart details'>{product.items.details}</li>
                                </ul>
                            </div>                        
                            <p className='pCartMap'>$ {product.items.price}</p>
                        </div>
                    </>)
                }
            </div>
        </>
    }

    else {
        return <>
            <div className='cartDivStyle'>
                <p className='mainpCart'>Your cart is empty</p>
                <Link to="/" className='linkGoShopping'><p className='pGoShopping'>Go shopping ➡</p></Link>
                <img src={emptyCart} alt="shoppingCart" className='emptyCartImg' />
            </div>
        </>
    };
};