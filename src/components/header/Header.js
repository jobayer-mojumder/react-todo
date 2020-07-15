import React, { Component } from 'react';
import './header.css'

class Header extends Component {

    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="header">
                <a href="#default" className="logo">Optimus</a>
                <div className="header-right">
                    <a href="#home">Home</a>
                </div>
            </div>
        );
    }
}

export default Header;