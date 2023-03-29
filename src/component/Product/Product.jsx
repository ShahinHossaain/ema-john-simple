import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, seller, ratings} = props.details;
    // console.log(name)
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
                <button className='card-button'>Add To Card</button>
            </div>
        </>
    );
};

export default Product;