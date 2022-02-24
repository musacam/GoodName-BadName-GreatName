import "./App.css";
import { punchlines } from "./data";
import { useState } from "react";

function App() {
  const values = Object.values(punchlines);
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [assign, setAssign] = useState(0);
  const handleChange = () => {
    setNumber(parseInt(Math.random() * values.length));
    values[number].good_name = "";
    values[number].bad_name = "";
    values[number].great_name = "";
    setAssign(0);
  };
  const handleChange1 = () => {
    if (assign % 3 === 0) {
      setNumber1(number);
    }
    if (assign % 3 === 1) {
      setNumber2(number);
    }
    if (assign % 3 === 2) {
      setNumber3(number);
    }
    setAssign(assign + 1);
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
        <div className="jokes">
          <div className="good_name">
            <div className="box">GOOD NAME</div>
            <div className="about">{values[number1].good_name}</div>
          </div>
          <div className="bad_name">
            <div className="box">BAD NAME</div>
            <div className="about">{values[number2].bad_name}</div>
          </div>
          <div className="great_name">
            <div className="box">GREAT NAME</div>
            <div className="about">{values[number3].great_name}</div>
          </div>
        </div>
        <div className="new_joke">
          {assign >= 3 ? null : (
            <button className="joke_button" onClick={handleChange1}>
              Name It!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
