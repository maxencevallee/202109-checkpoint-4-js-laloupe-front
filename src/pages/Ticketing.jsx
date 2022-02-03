import React from "react";
import { Link } from "react-router-dom";

function Ticketing() {
  return (
    <div className="ticketing">
      <h2>Our Offers</h2>
      <div className="offers">
        <div className="offer">
          <h3>Shlag</h3>
          <div className="price">
            <h4>10</h4>
            <img src="./drachme.png" alt="Drachme" width="40px" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            accusantium.
          </p>
          <Link exact to="tickets">
            <button type="button">Book now</button>
          </Link>
        </div>
        <div className="offer">
          <h3>Standard</h3>
          <div className="price">
            <h4>240</h4>
            <img src="./drachme.png" alt="Drachme" width="40px" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            accusantium.
          </p>
          <Link exact to="tickets">
            <button type="button">Book now</button>
          </Link>
        </div>
        <div className="offer">
          <h3>Premium</h3>
          <div className="price">
            <h4>1300</h4>
            <img src="./drachme.png" alt="Drachme" width="40px" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            accusantium.
          </p>
          <Link exact to="tickets">
            <button type="button">Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ticketing;
