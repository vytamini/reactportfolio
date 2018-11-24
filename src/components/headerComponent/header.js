import React, { Component } from 'react';
import {
    NavLink
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header class="header" id="top">
            <nav class="nav">
                <ul>
                    <li>
                        <NavLink to="/Creations" activeStyle={{ color: '#fff', borderBottom: '2px solid #fff', cursor: 'default' }}>CREATIONS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" activeStyle={{ color: '#fff', borderBottom: '2px solid #fff', cursor: 'default' }}>ABOUT ME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" activeStyle={{ color: '#fff', borderBottom: '2px solid #fff', cursor: 'default' }}>CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
