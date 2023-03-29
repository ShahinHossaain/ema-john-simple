import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" id='header-img'/>
            <div id='side-link-container'>
                <a className='side-link' href="1">Order</a>
                <a className='side-link' href="2">Order Review</a>
                <a className='side-link' href="3">Manage Inventory</a>
                <a className='side-link' href="4">Log in</a>
            </div>
        </div>
    );
};

export default Header;