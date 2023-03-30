import React from 'react';
import './Cart.css';
const Cart = ({items}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(let item of items){
        totalPrice += item.price;
        totalShipping += item.shipping;
    }
    let tax = totalPrice*6/100;
    let grandTotal = totalPrice + tax + totalShipping;
    console.log(items)
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Items added : {items.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button className='clearBtn Btn'>Clear Cart</button>
            <button className='reviewBtn Btn'>Review Order</button>
        </div>
    );
};

export default Cart;