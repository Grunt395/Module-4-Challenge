// alert("Oh baby");

// Gets variables from html ID's
var timeSpanEl = document.getElementById("time");
var startButton = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");


function StartQuiz() {  
    // alert("Starting Quiz:");
    var homeScreenEl = document.getElementById("home-menu");
    homeScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");


}

startButton.addEventListener("click", StartQuiz);

// startButton.onclick = StartQuiz;