var containerEl = document.querySelector(".container");
var answerEl = document.querySelector(".answer");
var okButtonEl = document.createElement("button");
var questionUl = document.createElement("ul");
questionUl.setAttribute("class", "question-ul");

okButtonEl.textContent = "ok";

containerEl.appendChild(okButtonEl);

okButtonEl.addEventListener("click", function () {
  okButtonEl.remove();
  answerEl.remove();
  firstQuestion();
});

// first question
function firstQuestion() {
  var question1El = document.createElement("p");
  question1El.textContent = "Common used data types are not used:";
  containerEl.appendChild(question1El);
  containerEl.appendChild(questionUl);
  var answerArr = ["strings", "booleans", "alerts", "numbers"];

  for (var i = 0; i < 4; i++) {
    // var liName = "answerLi" + i.toString();
    var answerLi = document.createElement("li");
    answerLi.setAttribute("id", "answer-li-" + i.toString());
    answerLi.textContent = answerArr[i];
    questionUl.appendChild(answerLi);
  }

  //add event listeners
  var answerLi0 = document.querySelector("#answer-li-0");
  answerLi0.addEventListener("click", function () {
    var answers = {};
    if (answerLi0.textContent == "alerts") {
      console.log("correct");
      answers["answer1"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer1"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    secondQuestion();
  });

  var answerLi1 = document.querySelector("#answer-li-1");
  answerLi1.addEventListener("click", function () {
    var answers = {};
    if (answerLi1.textContent == "alerts") {
      console.log("correct");
      answers["answer1"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer1"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    secondQuestion();
  });

  var answerLi2 = document.querySelector("#answer-li-2");
  answerLi2.addEventListener("click", function () {
    var answers = {};
    if (answerLi2.textContent == "alerts") {
      console.log("correct");
      answers["answer1"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer1"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    secondQuestion();
  });

  var answerLi3 = document.querySelector("#answer-li-3");
  answerLi3.addEventListener("click", function () {
    var answers = {};
    if (answerLi3.textContent == "alerts") {
      console.log("correct");
      answers["answer1"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer1"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    secondQuestion();
  });
}

// second question
function secondQuestion() {
  var question1El = document.createElement("p");
  question1El.textContent =
    "A condition in an if/else statement is enclosed with ______";
  containerEl.appendChild(question1El);
  containerEl.appendChild(questionUl);
  var answerArr = ["commas", "curly brackets", "brackets", "square brackets"];

  for (var i = 0; i < 4; i++) {
    var answerLi = document.createElement("li");
    answerLi.setAttribute("id", "answer-li-" + i.toString());
    answerLi.textContent = answerArr[i];
    questionUl.appendChild(answerLi);
  }

  //add event listeners
  var answerLi0 = document.querySelector("#answer-li-0");
  answerLi0.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    console.log(answers);
    if (answerLi0.textContent == "curly brackets") {
      console.log("correct");
      answers["answer2"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer2"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    thirdQuestion();
  });

  var answerLi1 = document.querySelector("#answer-li-1");
  answerLi1.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi1.textContent == "curly brackets") {
      console.log("correct");
      answers["answer2"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer2"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    thirdQuestion();
  });

  var answerLi2 = document.querySelector("#answer-li-2");
  answerLi2.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi2.textContent == "curly brackets") {
      console.log("correct");
      answers["answer2"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer2"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    thirdQuestion();
  });

  var answerLi3 = document.querySelector("#answer-li-3");
  answerLi3.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi3.textContent == "curly brackets") {
      console.log("correct");
      answers["answer2"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer2"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    thirdQuestion();
  });
}

// third question
function thirdQuestion() {
  var question1El = document.createElement("p");
  question1El.textContent = "Arrays in javascript can be used to store ______";
  containerEl.appendChild(question1El);
  containerEl.appendChild(questionUl);
  var answerArr = [
    "numbers and strings",
    "booleans",
    "other arrays",
    "all of the above",
  ];

  for (var i = 0; i < 4; i++) {
    var answerLi = document.createElement("li");
    answerLi.setAttribute("id", "answer-li-" + i.toString());
    answerLi.textContent = answerArr[i];
    questionUl.appendChild(answerLi);
  }

  //add event listeners
  var answerLi0 = document.querySelector("#answer-li-0");
  answerLi0.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    console.log(answers);
    if (answerLi0.textContent == "all of the above") {
      console.log("correct");
      answers["answer3"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer3"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fourthQuestion();
  });

  var answerLi1 = document.querySelector("#answer-li-1");
  answerLi1.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi1.textContent == "all of the above") {
      console.log("correct");
      answers["answer3"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer3"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fourthQuestion();
  });

  var answerLi2 = document.querySelector("#answer-li-2");
  answerLi2.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi2.textContent == "all of the above") {
      console.log("correct");
      answers["answer3"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer3"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fourthQuestion();
  });

  var answerLi3 = document.querySelector("#answer-li-3");
  answerLi3.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi3.textContent == "all of the above") {
      console.log("correct");
      answers["answer3"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer3"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fourthQuestion();
  });
}

// fourth question
function fourthQuestion() {
  var question1El = document.createElement("p");
  question1El.textContent =
    "String values must be enclosed with ______ to be assigned to variables";
  containerEl.appendChild(question1El);
  containerEl.appendChild(questionUl);
  var answerArr = [
    "quotation marks",
    "brackets",
    "curly brackets",
    "square brackets",
  ];

  for (var i = 0; i < 4; i++) {
    var answerLi = document.createElement("li");
    answerLi.setAttribute("id", "answer-li-" + i.toString());
    answerLi.textContent = answerArr[i];
    questionUl.appendChild(answerLi);
  }

  //add event listeners
  var answerLi0 = document.querySelector("#answer-li-0");
  answerLi0.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    console.log(answers);
    if (answerLi0.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });

  var answerLi1 = document.querySelector("#answer-li-1");
  answerLi1.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi1.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });

  var answerLi2 = document.querySelector("#answer-li-2");
  answerLi2.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi2.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });

  var answerLi3 = document.querySelector("#answer-li-3");
  answerLi3.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi3.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });
}

// fifth Question
function fifthQuestion() {
  var question1El = document.createElement("p");
  question1El.textContent =
    "A very useful tool in development for debugging for printing to the console is:";
  containerEl.appendChild(question1El);
  containerEl.appendChild(questionUl);
  var answerArr = ["console log", "set attribute", "print", "JSON parse"];

  for (var i = 0; i < 4; i++) {
    var answerLi = document.createElement("li");
    answerLi.setAttribute("id", "answer-li-" + i.toString());
    answerLi.textContent = answerArr[i];
    questionUl.appendChild(answerLi);
  }

  //add event listeners
  var answerLi0 = document.querySelector("#answer-li-0");
  answerLi0.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    console.log(answers);
    if (answerLi0.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });

  var answerLi1 = document.querySelector("#answer-li-1");
  answerLi1.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi1.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });

  var answerLi2 = document.querySelector("#answer-li-2");
  answerLi2.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi2.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });

  var answerLi3 = document.querySelector("#answer-li-3");
  answerLi3.addEventListener("click", function () {
    var answers = localStorage.getItem("answers");
    answers = JSON.parse(answers);
    if (answerLi3.textContent == "quotation marks") {
      console.log("correct");
      answers["answer4"] = "correct";
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      console.log("incorrect");
      answers["answer4"] = "incorrect";
      localStorage.setItem("answers", JSON.stringify(answers));
    }
    questionUl.innerHTML = "";
    question1El.remove();
    fifthQuestion();
  });
}
