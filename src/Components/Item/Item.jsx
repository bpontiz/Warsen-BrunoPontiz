import './Item.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Item( {id, name, price, stock, image, details} ) {

    async function addToCartHandler() {
        
        if(localStorage.getItem('username') !== '') {
            const getUserData = await axios.get('http://localhost:8081/api/users/auth/login');
            const quantity = 1;
            console.log(getUserData.data);
    
            const newCart = {
                email: getUserData.data.email,
                items: {
                    name, price, quantity, image, details
                },
                address: getUserData.data.address
            };
            
            return await axios.post('http://localhost:8081/api/carts', newCart);
        };

        return console.log(`No user has been identified. Please log in.`);
    };


    return (
        <div className='itemProductDiv'>
            <div className='itemProductImageDiv'>
                <img src={image} alt="product" className='itemProductImage'/>
            </div>
            <p className="itemProductName">{name}</p>
            <p className="itemProductPrice"><strong>$ {price}<sup className='itemProductPriceCents'>00</sup></strong></p>
            <p className="itemProductStock">Stock: {stock}</p>
            <p className="itemProductDetails">{details}</p>
            <div className='itemButtonsDiv'>
                <button className='itemButton' onClick={addToCartHandler}><Link to='/cart' className='linkAddToCart' target='_blank'>Add to cart</Link></button>
            </div>
        </div>
    )
};
