import { useContext } from "react";
import "./App.css";
import Tubes from "./components/Tubes";
import { gameContext } from "./context/gameContext";

function App() {
  const { start, win } = useContext(gameContext);
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5 text-center title">Soda Sorting</h1>

        <Tubes />
        <div className="d-flex">
          {win && (
            <button
              className="btn"
              style={{ fontSize: "20px" }}
              onClick={start}
            >
              Next level
            </button>
          )}

          {win && <h2 className="mx-auto">Bravo !</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
