import "./App.css";
import Card from "./components/Card";
import { allCountryScoresSorted }  from "./data.js";



function App() {

  return (
    <div className="app">
        <h1 className="app-title">High Scores per Country</h1>
        {allCountryScoresSorted.map((country) => (
            <div className="card" key={country.name}>
            <Card country={country}/>
            </div>
        ))}
    </div>
  );
}

export default App;
