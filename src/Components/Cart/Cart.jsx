import './Cart.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../../Multimedia/shopping-cart.png';
import emptyCart from '../../Multimedia/emptyCart.jpg';
import axios from 'axios';
import trashBin from '../../Multimedia/trashBin.png';

export default function Cart() {

    const [ cart, setCart ] = useState([]);

    let totalPrice = 0;

    const handleBuyButton = async () => {
        console.log(cart);

        if(cart.length === 0) {
            return console.log('Cart is empty. Please add at least one product in order to buy.');
        }

        else {
            return cart.forEach(
                async item => await axios.post(
                    'http://localhost:8081/api/orders',
                    ({
                        email: item.email,
                        items: {
                            description: cart.map(el => `${el.items.name} x ${el.items.quantity}`)
                        }
                    })
                )
            );
        };
    };


    useEffect(() => {
        async function modifyCart() {
            const getUser = localStorage.getItem('username');

            if(getUser !== '') {
                const getUserData = await axios.get('http://localhost:8081/api/users/auth/login');

                const getCart = await axios.get(`http://localhost:8081/api/carts/filter/${getUserData.data.email}`);

                return setCart(getCart.data);
            }

            else {
                return setCart([]);
            }
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
                                    <li className='liMapCart trashBin'><img className='imgTrashBin' src={trashBin} alt="trashBin" onClick={async () => {
                                        await axios.delete(`http://localhost:8081/api/carts/${product._id}`);
                                    }} /></li>
                                </ul>
                            </div>                        
                            <p className='pCartMap'>$ {product.items.price}</p>
                        </div>
                        <p className='pTotalPrice'>Subtotal: $ {totalPrice += product.items.price}</p>
                    </>)
                }
            </div>
            <div className='divButtonCartBuy'>
                <button className='buttonCartBuy' onClick={() => handleBuyButton()}>Buy</button>
            </div>
            
            
        </>
    }

    else if(localStorage.getItem('username') === '') {
        return <>
            <div className='cartDivStyle'>
                <p className='mainpCart'>Your cart is empty</p>
                <Link to="/registered" className='linkGoShopping'><p className='pGoShopping'>Please log in first ➡</p></Link>
                <img src={emptyCart} alt="shoppingCart" className='emptyCartImg' />
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