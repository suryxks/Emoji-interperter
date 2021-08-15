import "./styles.css";
import React, { useState } from "react";
var emojiDatabase = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍓": "Strawberry"
};
var emojiArray = Object.keys(emojiDatabase);
export default function App() {
  var [description, set] = useState("");
  function inputChange(event) {
    var emoji = event.target.value;
    if (emojiDatabase[emoji] === undefined) {
      set("The enterd emoji is not present in our database");
    } else {
      var description = emojiDatabase[emoji];
      set(description);
    }
  }
  function clickHandler(item) {
    set(emojiDatabase[item]);
  }
  return (
    <div className="App">
      <h1>Fruit emoji Interpreter</h1>
      <input onChange={(event) => inputChange(event)}></input>
      <div style={{ fontSize: "large", padding: "0.5rem" }}>{description}</div>
      <div style={{ fontSize: "larger", padding: "1rem" }}>
        AVAILABLE FRUITS
      </div>

      <div class="container">
        {emojiArray.map(function (item) {
          return (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => clickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
