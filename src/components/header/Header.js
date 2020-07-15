import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <a href="#home">Home</a>
                </div>
            </div>
        );
    }
}

export default Header;