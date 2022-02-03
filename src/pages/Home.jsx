import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <header>
        <img src="./colchis.jpeg" alt="Colchis" />
        <div className="text">
          <h1>Welcome to the Kingdom of Colchis</h1>
          <button type="button">
            <Link exact to="ticketing">
              Visit the Kingdom
            </Link>
          </button>
        </div>
      </header>
      <div className="about">
        <h2>About the Kingdom</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          similique nostrum nulla quaerat necessitatibus at voluptas dignissimos
          vel cum perspiciatis officiis voluptatem ipsa dolore ullam nemo
          aperiam a quam fugit iusto, maiores asperiores suscipit veritatis
          fuga? Amet consequatur, error facilis accusamus odit aspernatur
          cupiditate illo architecto fuga reprehenderit est consequuntur ad
          omnis ducimus. Veritatis vero quis, dolore iure id eos.
        </p>
      </div>
      <div className="family">
        <h2>The Royal Family</h2>
        <div className="characters">
          <div className="character">
            <img src="./aeetes.png" alt="Aeetes" width="200px"/>
            <p>Aeetes</p>
          </div>
          <div className="character">
            <img src="./idyia.png" alt="Idyia" width="200px"/>
            <p>Idyia</p>
          </div>
          <div className="character">
            <img src="./madeas.png" alt="Madeas" width="200px"/>
            <p>Madeas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
