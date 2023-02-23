//selects quiz button and stores as variable
var submitEl = document.querySelector(".quizButton");
var timeEl = document.querySelector(".timer");
var quizEl = document.querySelector(".quizContainer");
var bodyEL = document.querySelector(".quizBody");
var contentEL = document.querySelector("#quizContent");
var titleEL = document.querySelector("#quizTitle");
var questionTitleEl = document.querySelector("#questionTitle");
var answerBodyEL = document.querySelector("#answerBody");
var gameEL = document.querySelector("#gameSection");

//Empty answer key variables
var ansUser = "";
var ansCorrect = "";
var questionCount = 0;

//Empty score variable
var leaderBoard = [];

//Default timer max length
var timeLeft = 61;

//stored quiz questions
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: [
         "Douglas Crockford",
         "Sheryl Sandberg",
         "Brendan Eich"
    ],
      correctAnswer: "Brendan Eich"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: [
         "Node.js",
         "TypeScript",
         "npm"
      ],
      correctAnswer: "npm"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: [
         "Angular",
         "jQuery",
         "ESLint"
      ],
      correctAnswer: "ESLint"
    }
  ];


  //Game End function
function gameEnd (){
    //hide game seciton, show quiz container
    quizEl.classList.remove("hidden")
    quizEl.classList.add("shown")

    gameEL.classList.remove("shown")
    gameEL.classList.add("hidden")

}


//Timer Funciton
function startTimer (){
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft

        if(timeLeft <= 0){
          clearInterval(timerInterval);
          gameEnd();
    
    }
  }, 1000);
}

//Construct Questions Function
function displayQuestions(array) {
    ansCorrect = array[questionCount].correctAnswer
    questionTitleEl.textContent = array[questionCount].question
    
    var allAnswers = array[questionCount].answers
    console.log(allAnswers)
       
    for (let i = 0; i < allAnswers.length; i++) {
            const answerChoice = allAnswers[i];
            const answerEl = document.getElementById(`answer${i+1}`)

            answerEl.textContent = answerChoice
        }
}

  //TODO  create quiz ending funciton (toggle hidden and visible)
  //TODO  create hischore page
  //TODO do styling in the CSS file(maybe as a break!)
  //TODO store user scores. reference stored user scores in highschore page


function placeholderReference (){}


function startGame (event) {
    timeLeft = 61;
    var element = event.target;
    var state = element.getAttribute("data-state");
    
    quizEl.classList.add("hidden")
    gameEL.classList.remove("hidden")
    gameEL.classList.add("shown")
    
    //create for loop to style and add button sleector to all gameEl button elements

    startTimer();
        
    displayQuestions(myQuestions);

    console.log(state)


  
}

//event listener for button click
submitEl.addEventListener("click", startGame);

answerBodyEL.addEventListener("click", ({target})=>{
  if(target.matches(".answerChoice")) {
    if(target.textContent === myQuestions[questionCount.correctAnswer]){
      questionCount++
      displayQuestions(myQuestions)
    }else {
      timeLeft = timeLeft-10
      questionCount++
      displayQuestions(myQuestions)
    }
  }
})