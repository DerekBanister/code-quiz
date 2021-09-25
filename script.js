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
var questionContainer = document.getElementById("question");
var containerMain = document.getElementById("mainContainer");
var startButton = document.getElementById("quizStart")

document.getElementById("quizStart").addEventListener("click", displayQuestion);

//I am going to need a few main functions, one that displays the question and gets
//rid of start button
function displayQuestion() {
   
}




//and answers, one that shows the results at the end, one that handles the timer,
//and one that stores the data and adds to scoreboard.