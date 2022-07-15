//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const customStyle = {
  color: "red"
};

let h1Text = "Good morning!";

console.log(d.getHours());

if (d.getHours() >= 12 || d.getHours() < 18) {
  h1Text = "Good Afternoon!";
  customStyle.color = "green";
} else if (d.getHours() >= 18 || d.getHours() < 24) {
  h1Text = "Good Evening";
  customStyle.color = "blue";
}

console.log(customStyle);

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{h1Text}</h1>
  </div>,
  document.getElementById("root")
);
