import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./Teams.css";

function Teams() {
  const [Teams, setTeams] = useState([]);
  fetch("https://localhost:7247/api/Team")
    .then((response) => response.json())
    .then((json) => setTeams(json));

  return (
    <div>
      <Navbar />
      <form class="table">
        <form class="Teams">
          <h1>Teams</h1>
        </form>
        <table className="Teamstable">
          <tr>
            <th>TeamNaam</th>
            <th>Thuis Stadion</th>
            <th>Thuis Shirt</th>
            <th>Uit Shirt</th>
          </tr>
          {Teams.map((item) => {
            return (
              <tr>
                <td>{item.TeamNaam}</td>
                <td>{item.StadionNaam}</td>
                <td>{item.ThuisShirt}</td>
                <td>{item.UitShirt}</td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}

export default Teams;
