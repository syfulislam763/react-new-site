import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1>Users Site</h1>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Users</a>
                <a href="#">Order List</a>
            </nav>
        </div>
    );
};

export default Header;