import "./App.css";
import { punchlines } from "./data";

function App() {
  const values = Object.values(punchlines);
  const randomValue = values[parseInt(Math.random() * values.length)];
  const handleChange = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="poster_column">
        <div className="punchline">{randomValue.punchline}</div>
        <div className="new_joke">
          <button className="joke_button" onClick={handleChange}>
            New Joke
          </button>
        </div>
      </div>
      <div className="goodbadgreat_column">
        <div className="good_name">
          <div className="box">GOOD NAME</div>
          <div className="about">{randomValue.good_name}</div>
        </div>
        <div className="bad_name">
          <div className="box">BAD NAME</div>
          <div className="about">{randomValue.bad_name}</div>
        </div>
        <div className="great_name">
          <div className="box">GREAT NAME</div>
          <div className="about">{randomValue.great_name}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
