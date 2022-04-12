import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, handleLogout }) {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-golf-balls">
        <Link to="/scratchpad" style={{ textDecoration: "none" }}>
          <p className="nav-bar-link">scratchpad</p>
        </Link>
      </div>
      <div className="nav-bar-golf-balls">
        <Link to="/scores" style={{ textDecoration: "none" }}>
          <p className="nav-bar-link">view scores</p>
        </Link>
      </div>
      <div className="nav-bar-golf-balls">
        <Link to="/tee-times" style={{ textDecoration: "none" }}>
          <p className="nav-bar-link">tee times</p>
        </Link>
      </div>
      <div>
        {user && (
          <div
            className="nav-bar-logout"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            {`<< logout`}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
