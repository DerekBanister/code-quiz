//declare my questions and answers globally in one massive object
var questionArray = [
    {
        question: "What type of event in JavaScript makes a button work?",
        answers: ["clickOn","doubleClick","onClick",],
        correct: "onClick"
           
    },
    {
        question: "What are the 3 main programming languages of the internet?",
        answers: ["jQuery, MongoDB, Python","HTML, CSS, JavaScript","C++, CSharp, Unity"],
        correct: "HTML, CSS, JavaScript",    
  
    },
    {
        question: "What is one way you can make a website mobile-friendly?",
        answers: ["Media Queries","Smaller font sizes", "You dont mobile users do not matter"],
        correctAnswer: "Media Queries"   
    },

]
//declare all global variables I will need
var scoreboard = 0;
var questionAmount = 0;
var timerBox = document.querySelector("#timer");
var questionBox = document.querySelector("#questions");
var containerMain = document.querySelector("#mainContainer");
var startButton = document.querySelector("#quizStart");
var createUl = document.createElement("ul");

//variables for timer
var totalSeconds = 60;
var holdPenaltyTime= 0;
var penaltyTime = 10;
var createList = document.createElement("ul");

 
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
    questions.innerHTML = "";
    createList.innerHTML = "";
    //need a loop that goes through my question array
        for (var i = 0; i <questionArray.length; i++){
            var gameQuestion = questionArray[questionAmount].question;
            var gameAnswers = questionArray[questionAmount].answers;
            questionBox.textContent = gameQuestion;

            console.log(questionArray);
        }
        //select one question and create list
            gameAnswers.forEach(function (newQuestion){
                var listQuestion = document.createElement("li");
                listQuestion.textContent = newQuestion;
                questionBox.appendChild(createList);
                createList.appendChild(listQuestion);
         }
     )
}
//everything displaying as intended. Next is to figure out how to go to
//next question and create if statements for correct answers.



 


//Function that stores the data and adds to scoreboard.