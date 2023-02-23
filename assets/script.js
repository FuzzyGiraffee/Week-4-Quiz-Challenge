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

//Empty score variables

var leaderBoard = [];
//Stores initial webpage layout

var quizDefault = quizEl;
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
         "RequireJS",
         "ESLint"
      ],
      correctAnswer: "ESLint"
    }
  ];
//Game End function

function gameEnd (){
  if (timeLeft === 0 && questionCount === 2){
    //hide game seciton, show quiz container
    quizEl.classList.remove("hidden")
    quizEl.classList.add("shown")
    gameEL.classList.remove("shown")
    gameEL.classList.add("hidden")
  }
}


//Timer Funciton
function startTimer (){
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft

        if(timerInterval === 0 ){
        
    }
}, 1000);
}

//Construct Questions
function displayQuestions(array) {
    ansCorrect = array[questionCount].correctAnswer
    questionTitleEl.textContent = array[questionCount].question
    
    var allAnswers = array[questionCount].answers
    console.log(allAnswers)
       
    for (let i = 0; i < allAnswers.length; i++) {
            const element = allAnswers[i];
            
            const answerButton = document.createElement("button")
            answerButton.textContent = element
           
            answerBodyEL.append(answerButton)
            answerButton.addEventListener("click", questionCheck)
        }
}

  //TODO  build and reference funciton Time and question positon to see if game should end
  //TODO  create quiz ending funciton (toggle hidden and visible)
  //TODO  create hischore page
  // TODO do styling in the CSS file(maybe as a break!)
function placeholderReference (){}
//Answer Checker
function questionCheck(){
  //increase user score by 1 per correct answer
  if (placeholderReference){
  }else if (answerButton.value = myQuestions[questionCount].correctAnswer){
    leaderBoard = leaderBoard ++
  } else{
    timeLeft = timeLeft --
  }

}



function startGame (event) {
    var element = event.target;
    var state = element.getAttribute("data-state");
    
    quizEl.classList.add("hidden")

    gameEL.classList.remove("hidden")
    gameEL.classList.add("shown")
    
    //create for loop to style and add button sleector to all gameEl button elements

    startTimer();
        
    displayQuestions(myQuestions);
    

    //TODO: change to class ex: remove class visible, add class hidden


    //Toggles Hidden Status
    // if (state == "visible"){
    //     element.setAttribute("data-state", "hidden")

    //     //display questions
    //     function test1 (){
    //     for (i=1; i > questionCount; i++){
    //         titleEL.innerHTML = question[i]    
    //     }
    //     }

    // }else{
    //     element.setAttribute("data-state", "visible")
    // }
    // state = element.getAttribute("data-state");


    console.log(state)


   

  
}
//event listener for button click
submitEl.addEventListener("click", startGame);


//more timer logic
if (timeLeft === 0){
    //save then display score and then return to default page
}