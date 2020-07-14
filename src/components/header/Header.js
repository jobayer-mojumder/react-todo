import React from 'react';
import './header.css'

function Header() {
    return (
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
            <div className="header-right">
                <a href="#home">Home</a>
            </div>
        </div>
    );
}

export default Header;