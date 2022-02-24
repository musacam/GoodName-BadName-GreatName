import "./App.css";
import { punchlines } from "./data";
import { useState } from "react";

function App() {
  const values = Object.values(punchlines);
  const [number, setNumber] = useState(0);
  const handleChange = () => {
    setNumber(parseInt(Math.random() * values.length));
  };
  return (
    <div className="App">
      <div className="poster_column">
        <div className="punchline">{values[number].punchline}</div>
        <div className="new_joke">
          <button className="joke_button" onClick={handleChange}>
            New Joke
          </button>
        </div>
      </div>
      <div className="goodbadgreat_column">
        <div className="good_name">
          <div className="box">GOOD NAME</div>
          <div className="about">{values[number].good_name}</div>
        </div>
        <div className="bad_name">
          <div className="box">BAD NAME</div>
          <div className="about">{values[number].bad_name}</div>
        </div>
        <div className="great_name">
          <div className="box">GREAT NAME</div>
          <div className="about">{values[number].great_name}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
