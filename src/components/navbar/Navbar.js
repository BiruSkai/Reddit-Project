import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar-container">
      <div className="navbar-item">
        Mini-Reddit <span className="navbar-logo"> <FontAwesomeIcon icon={faHouse} /></span>
      </div>
      <div className="navbar-item">
        <span className="navbar-logo"><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
        <input id="searchBox" type="text" value={""} placeholder='Type search item'/>
      </div>
      <div className="navbar-item">
        Theme
      </div>
    </div>
  )
}
