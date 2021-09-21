import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css"

const NavBar = () => {
    return  (
        <header>
            <nav>
                <h1 className="nav-item">
                    <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
                        Hype Machine
                    </Link> 
                </h1>

                <ul className="nav-container">
                    <li className="nav-item">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>    
                            Home
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                            My Profile
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                            Login
                        </Link>
                    </li>
                    
                
                    <li className="nav-item">
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
                            Sign-up
                        </Link>
                    </li>
                    
                    <li className="nav-item">Logout</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar
