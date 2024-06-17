import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const obj={
        color:'black',
        textDecoration:'none',
        padding:'20px'

    }
    return (

        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link  to='/'  style={obj} >Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link style={obj} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={obj} to="/setting">Setting</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={obj} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
