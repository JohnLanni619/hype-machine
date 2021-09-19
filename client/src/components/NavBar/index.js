import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css"

const NavBar = () => {
    return  (
        <header>
            <nav>
                <Link to="/">
                <h1> Countdown </h1>
                </Link>
                <ul className="nav-container">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">My Profile</li>
                    <li className="nav-item">Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar
