import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col">
          <h2>HELLO. WE HAVE DOGS. CLICK ON THEM FOR MORE INFO.</h2>
        </div>
      </div>
      <div>
        {dogs.map((d) => (
          <div key={d.name}>
            <img src={`/${d.src}.jpg`} alt={d.name} />
            <h3>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
