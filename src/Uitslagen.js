import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import './Table.css';


function Uitslagen(){
    return(
        <div>
            <Navbar />
                <form class="table">
                    <form class="Uitslagen">
                        <h1>Uitslagen</h1>
                    </form>
                    <table>
                        <tr>
                            <th>Thuisteam</th>
                            <th></th>
                            <th>Uitteam</th>
                            <th>Uitslag</th>
                        </tr>
                        <tr>
                            <td>Fc Emmen</td>
                            <td>-</td>
                            <td>Fc Volendam</td>
                            <td>1:1</td>
                        </tr>
                        <tr>
                            <td>Fortuna Sittard</td>
                            <td>-</td>
                            <td>Rkc Waalwijk</td>
                            <td>0:0</td>
                        </tr>
                        <tr>
                            <td>Go Ahead Eagles</td>
                            <td>-</td>
                            <td>Sc Heerenveen</td>
                            <td>1:1</td>
                        </tr>
                        <tr>
                            <td>Sc Cambuur</td>
                            <td>-</td>
                            <td>Vitesse</td>
                            <td>0:3</td>
                        </tr>
                        <tr>
                            <td>Sparta Rotterdam</td>
                            <td>-</td>
                            <td>N.E.C. Nijmegen</td>
                            <td>2:0</td>
                        </tr>
                        <tr>
                            <td>Fc Twente</td>
                            <td>-</td>
                            <td>Fc Groningen</td>
                            <td>3:0</td>
                        </tr>
                        <tr>
                            <td>Psv</td>
                            <td>-</td>
                            <td>Fc Utrecht</td>
                            <td>6:1</td>
                        </tr>
                        <tr>
                            <td>AZ</td>
                            <td>-</td>
                            <td>Feyenoord</td>
                            <td>1:3</td>
                        </tr>
                        <tr>
                            <td>Ajax</td>
                            <td>-</td>
                            <td>Excelsior Rotterdam</td>
                            <td>7:1</td>
                        </tr>
                    </table> 
                </form>
        </div>
        );
}

export default Uitslagen;
