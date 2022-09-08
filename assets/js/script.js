// alert("Oh baby");

// Global Variables
var currentQuestionsIndex = 0;
var time = questions.length * 20;
var timerID;

// Gets variables from html ID's
var timeSpanEl = document.getElementById("time");
var startButton = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");
var questionChoicesEl = document.getElementById("questions-choices");
var feedbackEl = document.getElementById("feedback");


function EndQuiz() {
    clearInterval(timerID);

    var endMenuEl = document.getElementById("end-menu");
    endMenuEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");
}

function CountDown() { // alert("Test");
    time--;
    timeSpanEl.textContent = time;
    if (time <= 0) {
        EndQuiz();
    }
}

function ReceivedQuestions() {}

function StartQuiz() { // alert("Starting Quiz:");
    var homeScreenEl = document.getElementById("home-menu");
    homeScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");
    timerID = setInterval(CountDown, 1000);

    timeSpanEl.textContent = time;

    var currentQuestion = questions[currentQuestionsIndex];
    var titleEl = document.getElementsByClassName("questions-title")[0];
    titleEl.textContent = currentQuestion["title"];
    questionChoicesEl.innerHTML = "";

    for (let index = 0; index < currentQuestion["choices"].length; index++) {
        var choice = currentQuestion["choices"][index];
        var choiceElement = document.createElement('button');
        choiceElement.setAttribute("class", "choice");
        choiceElement.setAttribute("value", choice);
        choiceElement.textContent = `${
            index + 1
        }. ${choice}`
        questionChoicesEl.appendChild(choiceElement);
    }

}

function QuestionTrivia(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches(".choice")) {
        return
    }

    if (buttonEl.value !== questionChoicesEl[currentQuestionsIndex]["answer"]) {
        time -= 15;
        if (time < 0) {
            time = 0;
        }
        timeSpanEl.textContent = time;
        feedbackEl.textContent = "Wrong"
    }
    else {
        feedbackEl.textContent = "Correct"
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function(){
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000)

    currentQuestionsIndex++;
    if (time <= 0 || currentQuestionsIndex === questions.length) {
        EndQuiz()
    }
    else {
        ReceivedQuestions();
    }
}

questionChoicesEl.addEventListener("click", QuestionTrivia);
startButton.addEventListener("click", StartQuiz);

// startButton.onclick = StartQuiz;
