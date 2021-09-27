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
 //above with the eventlistener.
 function displayQuestion(questionAmount){
    questionBox.innerHTML = "";
    createList.innerHTML = "";
    //need a loop that goes through my question array. Setting variable for q and a
        for (var i = 0; i <questionArray.length; i++){
            var gameQuestion = questionArray[questionAmount].question;
            var gameAnswers = questionArray[questionAmount].answers;
            questionBox.textContent = gameQuestion;

           // console.log(questionArray);
        }
        //bug fixed in function
            gameAnswers.forEach(function (newQuestion){
                var listQuestion = document.createElement("li");
                listQuestion.textContent = newQuestion;
                questionBox.appendChild(createList);
                createList.appendChild(listQuestion);
                listQuestion.addEventListener("click", (evaluate));
               // console.log(createList);
         }
     )
}
//comparing choices with answers
function evaluate(event){
    var choice = event.target;

    if (choice.matches("li")){
            var createDiv = document.createElement("div");
           createDiv.setAttribute("id", "createDiv");
            //adding 1 to score and displaying if answer "correct"
        if (choice.textContent == questionArray[questionAmount].correctAnswer){
            userScore++;
            createDiv.textContent = "Correct!";
        }
        //penalize and display "wrong"
        else {
            totalSeconds = totalSeconds - penaltyTime;
           createDiv.textContent = "Incorrect!";
        }

        }
   
        questionAmount++;

    if (questionAmount >= questionArray.length){
        //finish quiz, function that ends quiz and displays score
        finishQuiz();
        //replacing incorrect/correct message on final screen.
        createDiv.textContent = "You got " + userScore + " Correct!";
    }
    //if quiz not finished display next question
    else{
        displayQuestion(questionAmount);
    }    
        questionBox.appendChild(createDiv);
    
     // console.log(createDiv);
    
}

//Quiz is moving! Fixed bugs regarding right and wrong questions. Everything displaying
//as intended!

//Function that stores the data and adds/displays to scoreboard.
function finishQuiz(){
    questionBox.innerHTML= "";
    timerBox.innerHTML= "";

    //end of quiz heading
    var createH2 = document.createElement("h1");
    createH2.setAttribute("id", "createH2");
    createH2.textContent = "End of quiz!";

    questionBox.appendChild(createH2);
    //final score paragraph
    var createText = document.createElement("p");
    createText.setAttribute("id", "createText");

    questionBox.appendChild(createText);

    if (totalSeconds >= 0){
        var remainingTime = totalSeconds;
        var createP3 = document.createElement("p");
        clearInterval(holdPenaltyTime);
        createP3.textContent = "Your score is: " + remainingTime;

        questionBox.appendChild(createP3);

        //console.log(createP3);
    }

}
//finish quiz is ending quiz and displaying score. Time to figure out
//localstorage and scoreboard