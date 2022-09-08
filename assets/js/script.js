// alert("Oh baby");

// Global Variables
var currentQuestionsIndex = 0;
var time = questions.length * 3;
var timerID;

// Gets variables from html ID's
var timeSpanEl = document.getElementById("time");
var startButton = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");


function EndQuiz() {
    clearInterval(timerID);

    var endMenuEl = document.getElementById("end-menu");
    endMenuEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", hide);
}

function CountDown() { // alert("Test");
    time--;
    timeSpanEl.textContent = time;
    if (time <= 0) {
        EndQuiz();
    }
}

function StartQuiz() { // alert("Starting Quiz:");
    var homeScreenEl = document.getElementById("home-menu");
    homeScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");
    timerID = setInterval(CountDown, 1000);

}

startButton.addEventListener("click", StartQuiz);

// startButton.onclick = StartQuiz;
