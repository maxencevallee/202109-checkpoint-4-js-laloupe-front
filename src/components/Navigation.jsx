import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <img src="./parthenon.png" alt="" width="60px" />
      <div className="links">
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="ticketing">
          Ticketing
        </Link>
        <Link exact to="admin-panel">
          Panel
        </Link>
        <Link exact to="login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
