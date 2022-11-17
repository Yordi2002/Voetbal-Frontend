import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import './Table.css';


function Wedstrijden(){
    
    return(
        <div>
            <Navbar />
                <form class="table">
                    <form class="Wedstrijden">
                        <h1>Wedstrijden</h1>
                    </form>
                    <table>
                        <tr>
                            <th>Tijdstip</th>
                            <th>Thuisteam</th>
                            <th></th>
                            <th>Uitteam</th>
                        </tr>
                        <tr>
                            <td>Za 22-10 16.30uur</td>
                            <td>Feyenoord</td>
                            <td>-</td>
                            <td>Fortuna Sittard</td>
                        </tr>
                        <tr>
                            <td>Za 22-10 18.45uur</td>
                            <td>Rkc Waalwijk</td>
                            <td>-</td>
                            <td>Ajax</td>
                        </tr>
                        <tr>
                            <td>Za 22-10 21.00uur</td>
                            <td>Vitesse</td>
                            <td>-</td>
                            <td>Fc Emmen</td>
                        </tr>
                        <tr>
                            <td>Zo 23-10 12.15uur</td>
                            <td>Excelsior Rotterdam</td>
                            <td>-</td>
                            <td>AZ</td>
                        </tr>
                        <tr>
                            <td>Zo 23-10 14.30uur</td>
                            <td>Fc Groningen</td>
                            <td>-</td>
                            <td>Psv</td>
                        </tr>
                        <tr>
                            <td>Zo 23-10 14.30uur</td>
                            <td>Sc Cambuur</td>
                            <td>-</td>
                            <td>Fc Twente</td>
                        </tr>
                        <tr>
                            <td>Zo 23-10 14.30uur</td>
                            <td>N.E.C. Nijmegen</td>
                            <td>-</td>
                            <td>Go Ahead Eagles</td>
                        </tr>
                        <tr>
                            <td>Zo 23-10 16.45uur</td>
                            <td>Fc Utrecht</td>
                            <td>-</td>
                            <td>Sparta Rotterdam</td>
                        </tr>
                        <tr>
                            <td>Zo 23-10 20.00uur</td>
                            <td>Fc Volendam</td>
                            <td>-</td>
                            <td>Sc Heerenveen</td>
                        </tr>
                    </table> 
                </form>
        </div>
        );
}

export default Wedstrijden;
