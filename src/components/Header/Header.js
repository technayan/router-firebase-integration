import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/About'}>About Us</Link>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/register'}>Register</Link>
            </nav>
        </div>
    );
};

export default Header;