import React from "react";
import { Link } from "react-router-dom";

function Tickets() {
  return (
    <div className="tickets">
      <div className="ticket">
        <h2>Confirm your booking</h2>
        <div className="date">
          <label>Visit date:</label>
          <input type="date" />
        </div>
        <div className="adult">
          <label>Adult:</label>
          <input type="number" min="0" max="50" />
        </div>
        <div className="child">
          <label>Child:</label>
          <input type="number" min="0" max="50" />
        </div>
        <Link exact to="/">
          <button>Validate</button>
        </Link>
      </div>
    </div>
  );
}

export default Tickets;
