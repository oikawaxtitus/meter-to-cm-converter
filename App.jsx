import { useState } from "react";
import "./App.css";

function App() {
  const [meters, setMeters] = useState("");
  const [cm, setCm] = useState(0);

  const convert = () => {
    setCm(Number(meters) * 100);
  };

  return (
    <div className="container">
      <h1>Meter to Centimeter Converter</h1>

      <input
        type="number"
        placeholder="Enter meters"
        value={meters}
        onChange={(e) => setMeters(e.target.value)}
      />

      <br /><br />

      <button onClick={convert}>Convert</button>

      <h2>{cm} cm</h2>
    </div>
  );
}

export default App;