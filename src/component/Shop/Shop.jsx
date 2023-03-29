import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(products);
    const [items, setItems] = useState([]);
    const handleAddToCard = item => {
        const keepItems = [...items, item];
        // keepItems.push(item);
        console.log(keepItems);
        setItems(keepItems);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product =>
                     <Product 
                     key={product.id} 
                     details={product}
                     handleAddToCard={handleAddToCard}
                     >
                     </Product>)}
            </div>
            <div className="card-container">
                <h1>Cards</h1>
                <p>Items added : {items.length}</p>
            </div>
        </div>
    );
};

export default Shop;