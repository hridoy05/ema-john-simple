import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {useAuth} from '../Login/useAuth'



const Header = () => {
    const auth = useAuth()
    console.log(auth);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory"> Inventory</a>
               {
                   auth.user &&
                   <span style={{color:"red"}}> Welcome{auth.user.name}</span>
                   
               }
               {
                   auth.user ?<a href="/login">Sign Out</a>
                   : <a href="/login">Sign in</a>
               }
            </nav>
        </div>
    );
};

export default Header;