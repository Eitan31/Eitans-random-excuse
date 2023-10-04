/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generate();
  });
  document.querySelector("#excuse").innerHTML = generate();
};
let generate = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = who[Math.floor(Math.random() * who.length)];
  let actionIndex = action[Math.floor(Math.random() * action.length)];
  let whatIndex = what[Math.floor(Math.random() * what.length)];
  let whenIndex = when[Math.floor(Math.random() * when.length)];
  let total = whoIndex + " " + actionIndex + " " + whatIndex + " " + whenIndex;
  return total;
};
