import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './Nav.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Nav() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
        <Link to="/" className="navbar-link">PortFolioLogo</Link>
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
                <Link to="/" className="navbar-link" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}>Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/competence" className="navbar-link" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}>Competence</Link>
              </li>
              <li className="navbar-item">
                <Link to="/projet" className="navbar-link" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}>Projet</Link>
              </li>
              <li className="navbar-item">
                <Link to="/presentation" className="navbar-link" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}>Presentation</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="navbar-link" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}>Contact</Link>
              </li>
            </ul>
            </div>
    </nav>
  );
}

export default Nav;
