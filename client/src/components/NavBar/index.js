import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css"

const NavBar = () => {
    return  (
        <header>
            <nav>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <h1> Hype Machine </h1>
                </Link>
                <ul className="nav-container">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">My Profile</li>
                    <li className="nav-item">Login</li>
                    <li className="nav-item">Sign-up</li>
                    <li className="nav-item">Logout</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar
