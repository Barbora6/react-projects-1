import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <section className="container">
      <h1>Projekty React:</h1>
      <ol>
        <li>
          <Link to="/custom-tabs">Proklikávací tlačítka se změnou textu</Link>
        </li>
        <li>
          <Link to="/modal-navigation">Modal navigation</Link>
        </li>
        <li>
          <Link to="/github-profil-finder">Github - vyhledávač profilů</Link>
        </li>
      </ol>
    </section>
  );
}

export default App;
