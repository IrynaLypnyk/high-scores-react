import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import WorldWideTable from "./components/WorldWideTable";
import { allCountryScoresSortedByCountryName }  from "./scores.js";

function App() {
  const [isSortedDesc, setIsSortedDesc ] = useState(false);

  const handleSort = () => {
      setIsSortedDesc((s) => !s);
  };

  return (
    <div className="app">
        <h1 className="app-title">High Scores per Country</h1>
        <button type="button" className="app-sort-btn" onClick={handleSort}>{`Sort scores ${isSortedDesc ? "DESC" : "ASCE"}`}</button>
        <WorldWideTable isSortedDesc={isSortedDesc}/>
        {allCountryScoresSortedByCountryName.map((country) => (
            <Card key={country.name} country={country} isSortedDesc={isSortedDesc}/>
        ))}
    </div>
  );
}

export default App;
