import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
export default function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
        <SearchBar/>
    </nav>
  );
};


