import "./App.css";
import React from "react";
const App = () => {

  
  // const submit = document.getElementById("submit-btn");
  // const reset = document.getElementById("reset-btn");
  
  
  let score = 0;
  let answer;
  let quiz = [
    ["What HTML tag makes a link?", "<h1>", "<a>", "<li>", "<p>", "<a>"],
    [
      "Which HTML tag is used to create a line break?",
      "<br>",
      "<hr>",
      "<p>",
      "<div>",
      "<br>",
    ],
    [
      "What HTML attribute is used to define inline styles?",
      "style",
      "class",
      "id",
      "src",
      "style",
    ],
    [
      "What CSS property is used to change the text color?",
      "color",
      "background-color",
      "font-color",
      "text-color",
      "color",
    ],
    [
      "Which CSS property controls the size of the text?",
      "text-size",
      "font-size",
      "text-style",
      "size",
      "font-size",
    ],
    [
      "What is the correct HTML tag for the largest heading?",
      "<h1>",
      "<h6>",
      "<h3>",
      "<h5>",
      "<h1>",
    ],
    [
      "How do you add a background color in CSS?",
      "background",
      "color",
      "background-color",
      "bg-color",
      "background-color",
    ],
    [
      "Which CSS property controls the alignment of text?",
      "text-style",
      "text-align",
      "text-decoration",
      "text-transform",
      "text-align",
    ],
    [
      "How do you make text bold in HTML?",
      "<b>",
      "<bold>",
      "<strong>",
      "<i>",
      "<strong>",
    ],
    [
      "Which HTML element is used to define a paragraph?",
      "<div>",
      "<p>",
      "<span>",
      "<section>",
      "<p>",
    ],
  ];
  function call() {
    const ques1 = document.getElementById("ques1");
    // console.log("hello")
    for (let i = 0; i < quiz.length; i++) {
      let ques = quiz[i];
      // console.log(ques[0])
      // console.log(ques1.inn)
      ques1.innerHTML += "<p>Ques" + [i + 1] + " " + ques[0] + "</p>";

      for (let j = 1; j <= 4; j++) {
        ques1.innerHTML += `<div class="options">
         <input type="radio" name="ques${i}" id="ques${i}${j}" value="${
          ques[j]
        }"></input>
          ${ques[j].replace("<", "&lt;").replace(">", "&gt;")}
          </div>`; //replace method in java
      }
    }
  }
  const button = document.getElementsByClassName("btn");
  function starts() {
    const start = document.getElementById("start");
    call();
    
    start.classList.add("display");
    Array.from(button).forEach((element) => {
     
      ///Array.from(var) converts the html collection which we got from getElementsByClassName into an Array
      element.classList.remove("btn");
      console.log("hel")
      element.classList.add("show");
    });
  }
  function submits() {
    const res = document.getElementById("result");
    for (let k = 0; k < quiz.length; k++) {
      let container = quiz[k];
      for (let j = 1; j <= 4; j++) {
        answer = document.getElementById(`ques${k}${j}`);
        if (answer.checked && answer.value === container[5]) {
          score += 5;
        }
        answer.disabled = true;
      }
    }
    res.textContent = `SCORE = ${score}/50`;
  }
  function resets() {
    const res = document.getElementById("result");
    score = 0;
    res.textContent = `SCORE = ${score}/50`;
    ques1.innerHTML = "";
    call();
  }

  return (
    <div>
      <h1>Quiz Time</h1>
      <button id="start" onClick={() => starts()}>
        Start Quiz
      </button>
      <p id="ques1"></p>
      <div className="btn">
        <button id="submit-btn" onClick={() => submits()}>
          SUBMIT
        </button>
        <button id="reset-btn" onClick={() => resets()}>
          RESET
        </button>
      </div>
      <div className="score">
        <p id="result">Score : </p>
      </div>
    </div>
  );
};
export default App;
