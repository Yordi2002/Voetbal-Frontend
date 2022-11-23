import Navbar from "./Components/Navbar";
import "./Gebruiker.css";
import "./Login.jsx";

function validate() {
  var Gebruikersnaam = document.getElementById("Gebruikersnaam").Value;
  var Wachtwoord = document.getElementById("Wachtwoord").Value;

  if (Gebruikersnaam === "Admin" && Wachtwoord === "User") {
    alert("Login gelukt");
    return false;
  } else {
    alert("Login mislukt");
  }
}

function Gebruiker() {
  return (
    <div>
      <Navbar />
      <form class="box" action="Login.jsx" method="POST">
        <h1>Login</h1>
        <input
          type="text"
          name=""
          placeholder="Enter Gebruikersnaam"
          id="Gebruikersnaam"
        />
        <input
          type="password"
          name=""
          placeholder="Enter Wachtwoord"
          id="Wachtwoord"
        />
        <input type="submit" name="" value="Login" onclick={validate} />
      </form>
    </div>
  );
}

export default Gebruiker;
