import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './Nav.css';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Nav() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
        <a href="/" className="brand-name">Portfolio</a>
        <div className ="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        <IconContext.Provider value={{ color: "white", className: "nav-icon" }}>
          <div>
            <FaBars />
          </div>
        </IconContext.Provider>
        </div>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
            <ul>
              <li className="navbar-item">
                <a href="/" className="navbar-link">Accueil</a>
              </li>
              <li className="navbar-item">
                <a href="/about" className="navbar-link">Compétence</a>
              </li>
              <li className="navbar-item">
                <a href="/services" className="navbar-link">Projet</a>
              </li>
              <li className="navbar-item">
                <a href="/portfolio" className="navbar-link">Moi</a>
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
