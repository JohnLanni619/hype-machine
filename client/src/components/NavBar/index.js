import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css"

const NavBar = () => {
    return  (
        <header>
            <nav>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className="nav-item"> Hype Machine </h1>
                </Link>
                <ul className="nav-container">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <li className="nav-item">Home</li>
                    </Link>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                    <li className="nav-item">My Profile</li>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    <li className="nav-item">Login</li>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
                    <li className="nav-item">Sign-up</li>
                    </Link>
                    <li className="nav-item">Logout</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar
