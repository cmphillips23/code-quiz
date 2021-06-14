var startButton = document.getElementById("start");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var question = document.getElementById("question");
var answers = document.getElementById("choices");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var response = document.getElementById("response");
var choiceC = document.getElementById("choice-c");
var choiceD = document.getElementById("choice-d");
var final = document.getElementById("final");
var again = document.getElementById("again");

let score = 0;

function startQuiz() {
    score = 0;
    currentQuestionCounter = 0;
    startButton.style.visibility = "hidden";
    title.style.visibility = "hidden";
    desc.style.visibility = "hidden";
    question.style.visibility = "visible";
    answers.style.visibility = "visible";
    final.style.visibility = "hidden";
    again.style.visibility = "hidden";
    choiceC.style.visibility = "visible";
    choiceD.style.visibility = "visible";

    questionHandler();
};

var questionsArr = [
    {
        question: "JavaScript is a ___-side programming language.",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None",
        correct: "c"
    },
    {
        question: "Which of the following is correct?",
        a: "i =+ 1;",
        b: "i += 1;",
        c: "i = i++1;",
        d: "+i+;",
        correct: "b"
    },
    {
        question: "What is scope in JavaScript?",
        a: "Using multiple functions with single arguments",
        b: "Command that tells us how an object is to be acted upon",
        c: "A user-defined or built-in set of statements that perform a task",
        d: "Refers to the current context of code, which determines the accessibility of variables to JavaScript",
        correct: "d"
    },
    {
        question: "What is the definition of a loop?",
        a: "A structure in code where you perform the same action or actions multiple times in a row",
        b: "The basic data structure in JavaScript",
        c: "Allows an application to decide between one or more courses of action, based on whether a particular condition is true",
        d: "The most common way to declare a variable in JavaScript",
        correct: "a"
    },
    {
        question: "If you type the following code in the console window, what result will you get? 3>2>1 === false;",
        a: "true",
        b: "false",
        c: " ",
        d: " ",
        correct: "a"
    }
]

let currentQuestionCounter = 0;

function questionHandler() {
    if (currentQuestionCounter === 5) {
        endQuiz();
    }

    var currentQuestion = questionsArr[currentQuestionCounter];

    question.textContent = currentQuestion.question;
    answerA.textContent = currentQuestion.a;
    answerB.textContent = currentQuestion.b;
    answerC.textContent = currentQuestion.c;
    answerD.textContent = currentQuestion.d;
}

function scoreHandler(selection) {
    if (selection === questionsArr[currentQuestionCounter].correct) {
        score = score + 20;
        response.textContent = "Correct!"
        currentQuestionCounter++;
        questionHandler();
    } else {
        response.textContent = "Wrong!"
        currentQuestionCounter++;
        questionHandler();
    }

    if (currentQuestionCounter === 4) {
        choiceC.style.visibility = "hidden";
        choiceD.style.visibility = "hidden";
    }
}

function endQuiz() {
    question.style.visibility = "hidden";
    answers.style.visibility = "hidden";
    response.style.visibility = "hidden";
    again.style.visibility = "visible";
    final.style.visibility = "visible";

    final.textContent = "Final Score: " + score;
}