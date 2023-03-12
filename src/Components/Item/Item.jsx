import './Item.css';
import {Link} from 'react-router-dom';

export default function Item( {id, name, price, stock, image, details} ) {
    return (
        <div className='itemProductDiv'>
            <div className='itemProductImageDiv'>
                <img src={image} alt="product" className='itemProductImage'/>
            </div>
            <p className="itemProductName">{name}</p>
            <p className="itemProductPrice">$ {price}<sup className='itemProductPriceCents'>00</sup></p>
            <p className="itemProductStock">Stock: <strong>{stock}</strong></p>
            <p className="itemProductDetails">{details}</p>
            <div className='itemButtonsDiv'>
                <button className='itemButton'>Add to cart</button>
                <button className='itemButton'>Buy</button>
            </div>
        </div>
    )
};
