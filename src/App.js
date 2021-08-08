import "./styles.css";
import React, { useState } from "react";
var emojiDatabase = {
  "😂": " Face with Tears of Joy",
  "🙃": "Upside-Down Face",
  "😀 ": "Grinning Face",
  "✨": "Sparkles",
  "❤️": "Red Heart",
  "🔥": "Fire"
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
      <h1>Know the emoji</h1>
      <input onChange={(event) => inputChange(event)}></input>
      <div style={{ fontSize: "large", padding: "0.5rem" }}>{description}</div>
      <div style={{ fontSize: "larger", padding: "1rem" }}>
        {" "}
        Emoji's We know
      </div>

      <div>
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
