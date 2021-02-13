import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
export default function Nav() {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-title">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          <div id='title'>
          Henry - Weather App
          </div>
        </span>
      </Link>
        <SearchBar id="searchBar"/>
    </nav>
  );
};


