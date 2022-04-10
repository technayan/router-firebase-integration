import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {

    const {user} = useFirebase();
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/About'}>About Us</Link>
                {
                    user.uid ? <button>Sign Out</button> : 
                    <>
                    <Link to={'/login'}>Log In</Link>
                    <Link to={'/register'}>Register</Link>
                    </>
                }
                
            </nav>
        </div>
    );
};

export default Header;