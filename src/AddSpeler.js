import React from "react";
import "./AddSpeler.css";
import Navbar from "./Components/Navbar";
import FRMAddSpeler from "./Components/FRMAddSpeler";

function AddSpeler() {
  return (
    <div className="AddSpeler">
      <Navbar />
      <h1></h1>
      <FRMAddSpeler />
    </div>
  );
}

export default AddSpeler;
