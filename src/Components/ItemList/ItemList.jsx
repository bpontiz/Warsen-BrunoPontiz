import './ItemList.css';
import Item from '../Item/Item.jsx';

export default function ItemList( { data = [] } ) {
    return (
        data.map( product => <Item key={product._id} id={product._id} name={product.name} price={product.price} stock={product.stock} image={product.image} details={product.details} />)
    )
};