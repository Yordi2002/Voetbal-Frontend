import Navbar from "./Components/Navbar";
import "./Table.css";

function Stand() {
  return (
    <div>
      <Navbar />
      <form class="table">
        <form class="Stand">
          <h1>Stand</h1>
        </form>
        <table>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Gespeeld</th>
            <th>W | V | G</th>
            <th>DV-DT</th>
            <th>Doelsaldo</th>
            <th>Punten</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajax</td>
            <td>10</td>
            <td>8 | 1 | 1</td>
            <td>34-9</td>
            <td>+25</td>
            <td>25</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Psv</td>
            <td>10</td>
            <td>8 | 2 | 0</td>
            <td>35-14</td>
            <td>+21</td>
            <td>24</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Feyenoord</td>
            <td>10</td>
            <td>7 | 1 | 2</td>
            <td>26-11</td>
            <td>+15</td>
            <td>23</td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Stand;
