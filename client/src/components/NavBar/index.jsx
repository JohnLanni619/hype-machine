import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css"
import { GoFlame } from 'react-icons/go';
import auth from '../../utils/auth';

const NavBar = () => {

    const logout = event => {
        event.preventDefault();
        auth.logout();
        alert('Logout was successful!')
    };

    return  (
        <header>
            <h1>
                <Link to="/" className="nav-item" style={{ textDecoration: 'none', color: "white" }}>
                    <GoFlame></GoFlame>Hype Machine<GoFlame></GoFlame>
                </Link> 
            </h1>
            <nav className="nav-container">
            {auth.loggedIn() ? (
                <>
                    <Link to="/profile" className="nav-item">My Profile</Link>
                    <a href="/" className="nav-item" onClick={logout}>
                        Logout
                    </a>
                </>
            ) : (
                <>
                    <Link to="/login" className="nav-item">Login</Link>
                    <Link to="/signup" className="nav-item">Signup</Link>
                </>
            )}
                



                {/* <ul className="nav-container">
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

                    <li className="nav-item">Logout</li>
                    
                    
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
                </ul> */}
            </nav>
        </header>
    );
};

export default NavBar
