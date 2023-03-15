import './Item.css';

export default function Item( {id, name, price, stock, image, details} ) {
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
                <button className='itemButton'>Add to cart</button>
                <button className='itemButton'>Buy</button>
            </div>
        </div>
    )
};
