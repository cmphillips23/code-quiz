var startButton = document.getElementById("start");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var questionTitle = document.getElementById("question-title");
var answers = document.getElementById("choices");

function startQuiz() {
    startButton.style.visibility = "hidden";
    title.style.visibility = "hidden";
    desc.style.visibility = "hidden";
    questionTitle.style.visibility = "visible";
    answers.style.visibility = "visible";
};