//declare my questions and answers globally in one massive object
var questionArray = [
    {
        question: "What type of event in JavaScript makes a button work?",
        answers: ["clickOn","doubleClick","onClick",],
        correctAnswer: "onClick"
           
    },
    {
        question: "What are the 3 main programming languages of the internet?",
        answers: ["jQuery, MongoDB, Python","HTML, CSS, JavaScript","C++, CSharp, Unity"],
        correctAnswer: "HTML, CSS, JavaScript",    
  
    },
    {
        question: "What is one way you can make a website mobile-friendly?",
        answers: ["Media Queries","Smaller font sizes", "You dont, mobile users do not matter"],
        correctAnswer: "Media Queries"   
    },

]
//declare all global variables I will need
var userScore = 0;
var questionAmount = 0;
var timerBox = document.querySelector("#timer");
var questionBox = document.querySelector("#maincontainer");
var startButton = document.querySelector("#quizStart");
var createList = document.createElement("ul");
//variables for timer
var totalSeconds = 60;
var holdPenaltyTime= 0;
var penaltyTime = 15;


 
//starts timer and tracks penalty times. Calling displayQuestion.
quizStart.addEventListener("click", function(){
   
   //BUTTON HIDDEN!
    this.style.visibility = "hidden";
    //check if timer at zero
    if (holdPenaltyTime === 0){
        holdPenaltyTime = setInterval(function(){
            totalSeconds--;
            timerBox.textContent = "Time left: " + totalSeconds;
    
    if (totalSeconds === 0){
        clearInterval(holdPenaltyTime);
        timerBox.textContent = "Time is up!";

        }
    }, 1000);
}
   //TIMER WORKING!!!
//console.log(quizStart, timerBox)
displayQuestion(questionAmount);
} 

 ) 
 //function that displays questions on screen. Need to call it in the function
 //above with the eventlistener. Giving function parameter of my object.
 function displayQuestion(questionAmount){
    questionBox.innerHTML = "";
    createList.innerHTML = "";
    //need a loop that goes through my question array
        for (var i = 0; i <questionArray.length; i++){
            var gameQuestion = questionArray[questionAmount].question;
            var gameAnswers = questionArray[questionAmount].answers;
            questionBox.textContent = gameQuestion;

           // console.log(questionArray);
        }
        
            gameAnswers.forEach(function (newQuestion){
                var listQuestion = document.createElement("li");
                listQuestion.textContent = newQuestion;
                questionBox.appendChild(createList);
                createList.appendChild(listQuestion);
                listQuestion.addEventListener("click", (evaluate));
                console.log(listQuestion);
         }
     )
}
//comparing choices with answers
function evaluate(event){
    var choice = event.target;

        if (choice.matches("li")){
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "div");
            //adding 1 to score and displaying if answer "correct"
        if (choice.textContent == questionArray[questionAmount].answers){
            userScore++;
            createDiv.textContent = "Correct!";
        }
        //penalize and display "wrong"
        else {
            totalSeconds = totalSeconds - penaltyTime;
            createDiv.textContent = "Wrong!";
        }

        }
   
        questionAmount++;

    if (questionAmount >= questionArray.length){
        //finish quiz, function that ends quiz and displays score
    }
    //if quiz not finished display next question
    else{
        displayQuestion(questionAmount);
    }    
        questionBox.appendChild(choice);
    console.log();
    
}

//Quiz is moving! Some bugs to work out still. Answer that is clicked
//is showing on next screen. onClick events are functioning but bugs


 


//Function that stores the data and adds to scoreboard.