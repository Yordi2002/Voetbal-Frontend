import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Wedstrijden from "./Wedstrijden";
import Uitslagen from "./Uitslagen";
import Stand from "./Stand";
import Teams from "./Teams";
import Gebruiker from "./Gebruiker";
import Speler from "./Speler";
import Stadion from "./Stadion";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wedstrijden" element={<Wedstrijden />} />
          <Route path="/Uitslagen" element={<Uitslagen />} />
          <Route path="/Stand" element={<Stand />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Gebruiker" element={<Gebruiker />} />
          <Route path="/Speler" element={<Speler />} />
          <Route path="/Stadion" element={<Stadion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
