import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {id, img, name, price, seller, ratings} = props.details;
    const {handleAddToCard} = props; 
    // console.log(props.details) 
    
    return (
        <>
            <div className="card">
                <img src={img} alt="Avatar" style={{width:'95%', margin: '7px', borderRadius: '7px'}}></img>
                <div className="container">
                  <h3>{name}</h3> 
                  <h4>Price : $ {price}</h4>
                  <h5>Manufacturer : {seller}</h5> 
                  <h5>Rating : {ratings}</h5>
                </div>
                <button className='card-button' onClick={() => handleAddToCard(props.details)}>Add To Card <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </>
    );
};

export default Product;