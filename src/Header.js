import React from "react";
import "./Header.css";

import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__icon">TODo List</h2>

      <div className="data">
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>

        <NavLink exact activeClassName="selected" to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default Header;
