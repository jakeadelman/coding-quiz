var containerEl = document.querySelector(".container");
var answerEl = document.querySelector(".answer");
var okButtonEl = document.createElement("button");
var questionUl = document.createElement("ul");

okButtonEl.textContent = "ok";

containerEl.appendChild(okButtonEl);

okButtonEl.addEventListener("click", function () {
  okButtonEl.remove();
  answerEl.remove();
});

function firstQuestion() {
  var question1El = document.createElement("p");
  question1El.textContent("Common used data types are not used:");
  containerEl.appendChild("question1El");
  var answerArr = [""];

  for (var i = 0; i++; i < 4) {
    var answerLi = document.createElement("li");
    answerLi.textContent = answerArr[i];
    questionUl.appendChild(answerLi);
  }
}
