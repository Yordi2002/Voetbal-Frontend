import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./Stadions.css";

function Stadion() {
  const [Stadion, setStadion] = useState([]);
  fetch("https://localhost:7247/api/Stadion")
    .then((response) => response.json())
    .then((json) => setStadion(json));

  return (
    <div>
      <Navbar />
      <form class="table">
        <form class="Stadions">
          <h1>Stadions</h1>
        </form>
        <table className="stadiontable">
          <tr>
            <th>Stadion Naam</th>
            <th>Locatie</th>
            <th>Capaciteit</th>
          </tr>
          {Stadion.map((item) => {
            return (
              <tr>
                <td>{item.StadionNaam}</td>
                <td>{item.Locatie}</td>
                <td>{item.Capaciteit}</td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}

export default Stadion;
