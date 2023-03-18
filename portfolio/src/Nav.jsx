import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Portfolio</a>
        <div className="menu-icon">
          <FaBars />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Accueil</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">À propos</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/portfolio" className="navbar-link">Portfolio</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
