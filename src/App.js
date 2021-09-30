import "./styles.css";
import { useState } from "react";
var foodDictionary = {
  "🥨": " Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza"
};
var foodKey = Object.keys(foodDictionary);

export default function App() {
  var [input, setInput] = useState("");
  var showOutput;

  function inputChangeHandler(event) {
    input = event.target.value;
    showOutput = foodDictionary[input];

    if (!(input in foodDictionary)) {
      showOutput = "No such food found!";
    }
    setInput(showOutput);
  }

  function foodClickHandler(food) {
    showOutput = foodDictionary[food];
    setInput(showOutput);
  }

  return (
    <div className="App">
      <header>
        <h1>Foodie Mania</h1>
      </header>

      <main>
        <input
          onChange={inputChangeHandler}
          placeholder="Enter food's emoji to know its name"
        ></input>

        <div className="output">{input}</div>

        <div> Food Items we know: </div>

        <div className="foodDiv">
          {foodKey.map((food) => {
            return <span onClick={() => foodClickHandler(food)}>{food}</span>;
          })}
        </div>
      </main>
    </div>
  );
}
