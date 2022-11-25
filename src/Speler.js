import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./Speler.css";

function Speler() {
  const [speler, setSpeler] = useState([]);
  fetch("https://localhost:7247/api/Speler")
    .then((response) => response.json())
    .then((json) => setSpeler(json));

  return (
    <div>
      <Navbar />
      <form class="table">
        <form class="Spelers">
          <h1>Spelers</h1>
        </form>
        <table className="spelertable">
          <tr>
            <th>Team</th>
            <th>Naam</th>
            <th>Land</th>
            <th>Positie</th>
          </tr>
          {speler.map((item) => {
            return (
              <tr>
                <td>{item.TeamNaam}</td>
                <td>{item.Naam}</td>
                <td>{item.Land}</td>
                <td>{item.Positie}</td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}

export default Speler;
