import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {FiGithub} from 'react-icons/fi'

function Nav() {

    const navStyle = {
        color: 'black',
        listStyle: 'none',
        textDecoration: 'none',
    }


    return (
        <nav>
            <a href = 'https://github.com/minho-sama/Merch-Store' target = '_blank' rel="noreferrer">minho 2021<FiGithub/></a>
            <img className = "bayern-logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg/900px-Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg.png" alt = "bayern-logo"/>
            <ul>
                <Link to = '/' style={navStyle}><li>Home</li></Link>
                <Link to = '/shop' style={navStyle}><li>Shop</li></Link>
                <Link to = '/cart' style={navStyle}><li>Your Cart</li></Link>
            </ul>

        </nav>
    )
}

export default Nav
