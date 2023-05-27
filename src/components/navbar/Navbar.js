import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";
import Search from '../features/search/Search';

export const Navbar = () => {

  return (
    <div id="navbar-container">
      <div className="navbar-item">
        Mini-Reddit <span className="navbar-logo"> <FontAwesomeIcon icon={faHouse} /></span>
      </div>
      <Search />
      <div className="navbar-item" >
        <div className="right-navbar-item">
          Theme
        </div>
        <div className="right-navbar-item" onClick={""}>
          Logout
        </div>
      </div>

    </div>
  )
}
