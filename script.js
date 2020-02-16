// variables for buttons, score, and questions
var startButton = document.getElementById('start-btn');
var displayText =document.getElementById('displaytext');
var questionsContainerElement = document.getElementById('question-container');
var navBarContainerElement = document.getElementById('nav-container');
var highScoreElement = document.getElementById('Highscore');
var questionIndex = 0;
var sec = 75;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
  ];
// click to start the game
startButton.addEventListener('click', startGame) 


  

// when start button is clicked it will gain the "hide" property, questions and timer will be made unhidden.
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionsContainerElement.classList.remove('hide')
    navBarContainerElement.classList.remove('hide')

    
      // function for timer 
      function startTimer(){
          console.log('timer suppose to go')
          var timer = setInterval(function(){
              sec--;
              document.getElementById("seconds").innerHTML='00:'+sec;
              if (sec < 0) {
                  clearInterval(timer);
                  alert("Time is up!")
                  questionsContainerElement.classList.add('hide')
                  navBarContainerElement.classList.add('hide')
                  displayText.classList.add('hide')
                  highScoreElement.classList.remove('hide')
                  highScoreElement.textContent = "You're score is " + score;

              }
          }, 1000);
      }
      document.getElementById('displaytext').addEventListener('click', function() {
          sec -= 15;
          document.getElementById("seconds").innerHTML='00:'+sec;
      });
      startTimer();
    }
  
  
  

populateQuestions()
function populateQuestions() {
  let choicesDiv = document.querySelector("#choices");
  choicesDiv.innerHTML = "";
  let currentQuestion = questions[questionIndex]
  var titleEl = document.getElementById("question");
  titleEl.textContent = currentQuestion.title
  let choices = currentQuestion.choices
  let choicesLength = currentQuestion.choices.length
  

  for (var i = 0; i < choicesLength; i++) {
  // create new button for each choice
  var choiceNode = document.createElement("button");
  choiceNode.textContent = choices[i];
  choiceNode.setAttribute("id", `choice${i}`)
  document.getElementsByClassName("choices")[0].appendChild(choiceNode);
  

  }
  
  // // add onclick to to each choice
  let choice0 = document.getElementById("choice0")
  let choice1 = document.getElementById("choice1")
  let choice2 = document.getElementById("choice2")
  let choice3 = document.getElementById("choice3")

  choice0.addEventListener("click", userChoice)
  choice1.addEventListener("click", userChoice)
  choice2.addEventListener("click", userChoice)
  choice3.addEventListener("click", userChoice)
  
}

var score = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}
function userChoice(choice){
    console.log(choice.srcElement.innerText)
    let answer = choice.srcElement.innerText
    let currentQuestion = questions[questionIndex]
    if (answer == currentQuestion.answer){
        score++;
        console.log("correct");
        var correctBanner = document.getElementById("displaytext");
        correctBanner.textContent = "Correct!";

        questionIndex++;
        populateQuestions();
    }
    else {
      console.log("wrong");
      document.getElementById('choices').addEventListener('click', function() {
        sec -= 15;
        document.getElementById("seconds").innerHTML='00:'+sec;
        score--;
    });
      var wrongBanner = document.getElementById("displaytext");
      wrongBanner.textContent = "Wrong!";
      
     
      questionIndex++;
      populateQuestions();
    }
    
    
    // questionIndex++;
    // populateQuestions();
    
    }
