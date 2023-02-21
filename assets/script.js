//selects quiz button and stores as variable
var submitEl = document.querySelector(".quizButton");
var timeEl = document.querySelector(".timer")

//Default timer max length
var timeLeft = 60



function test (event) {
    
var element = event.target
    //Toggles Hidden Status
    if (hiddenStatus= "visable"){
        element.setAttribute("hiddenStatus", "hidden")
        console.log(hiddenStatus)
        //TODO: currently returns
    }else if (hiddenstatus = "hidden") {
        element.setAttribute("hiddenStatus", "visable")
        console.log(hiddenStatus)
    }
    //timer
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft

        if(timerInterval === 0 ){
            
        }
    }, 1000);



    
}


//event listener for button click
submitEl.addEventListener("click", test);
