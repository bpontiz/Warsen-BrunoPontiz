import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList.jsx';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const getProducts = await axios.get('http://localhost:8081/api/products/');
                setProducts(getProducts.data);
            }
    
            catch (err) {
                console.log(`ERR! ${err}`);
            }
        }

        getData();

    }, []);
    
    return (
        <div className='productItemListContainer'><ItemList data={products} /></div>
    )
};