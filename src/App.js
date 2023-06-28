import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import { allCountryScoresSorted }  from "./data.js";

function App() {
  const [isSortedDesc, setIsSortedDesc ] = useState(false);

  const handleSort = () => {
      setIsSortedDesc((s) => !s);
  };

  return (
    <div className="app">
        <h1 className="app-title">High Scores per Country</h1>
        <button type="button" className="app-sort-btn" onClick={handleSort}>{`Sort scores ${isSortedDesc ? "DESC" : "ASCE"}`}</button>
        {allCountryScoresSorted.map((country) => (
            <div className="card" key={country.name}>
            <Card country={country} isSortedDesc={isSortedDesc}/>
            </div>
        ))}
    </div>
  );
}

export default App;
