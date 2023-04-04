import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">

            <h3>logo</h3>

            <ul className='links'>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/About">
                    <li>About</li>
                </Link>

                <Link to="/Contact">
                    <li>Contact</li>
                </Link>

            </ul>

        </div>
    );
}

export default Navbar;
