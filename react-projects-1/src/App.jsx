import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Projekty React:</h1>
      <ol>
        <li>
          <Link to="/custom-tabs">Custom tabs</Link>
        </li>
      </ol>
    </>
  );
}

export default App;
