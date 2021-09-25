//declare my questions and answers globally in one massive object
var questionContainer = [
    {
        question: "What type of event makes a button work?",
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
var questionContainer = document.querySelector("#questions");
var choicesContainer = document.querySelector("#choices");
var containerMain = document.querySelector("#mainContainer");
var startButton = document.querySelector("#quizStart");
var createUl = document.createElement("ul");

//variables for timer?
var totalSeconds = 60;
var holdPenaltyTime= 0;
var penaltyTime = 10;

 
//starts timer and tracks penalty times.
quizStart.addEventListener("click", function(){
    //check if timer at zero
    if (holdPenaltyTime === 0){
        holdPenaltyTime = setInterval(function(){
            totalSeconds--;
            timerBox.textContent = "Time: " + totalSeconds;
    
    if (totalSeconds === 0){
        clearInterval(holdPenaltyTime);
        timerBox.textContent = "Time's up!";

        }
    }, 1000);
}
   //TIMER WORKING!!!
console.log(quizStart, timerBox)

} 

 ) 
 //function that displays questions on screen. Need to call it in the function
 //above with the eventlistener. Giving function parameter of my object.
 function displayQuestion(questionAmount){

 }




//Something that compares question choice with answer





//Function that stores the data and adds to scoreboard.