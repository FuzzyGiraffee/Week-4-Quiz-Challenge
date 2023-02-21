//selects quiz button and stores as variable
var submitEl = document.querySelector(".quizButton");
var timeEl = document.querySelector(".timer")
var quizEl = document.querySelector(".quizContent")

//Default timer max length
var timeLeft = 60

function test (event) {

var element = event.target;
var state = element.getAttribute("data-state");

    //timer
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft

        if(timerInterval === 0 ){
            
        }
    }, 1000);

    //Toggles Hidden Status
    if (state == "visible"){
        element.setAttribute("data-state", "hidden")
        quizEl.replaceAll()
    }else  {
        element.setAttribute("data-state", "visible")
    }
    state = element.getAttribute("data-state");
    console.log(state)
}



//event listener for button click
submitEl.addEventListener("click", test);
