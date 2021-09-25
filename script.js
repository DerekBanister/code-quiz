//declare my questions and answers globally in one massive object
var questionOne = [
    {
        question: "What type of event makes a button work?",
        answers: {
            a: 'clickOn',
            b: 'doubleClick',
            c: 'onClick',
        },
        correctAnswer: 'c'
    },
    {
        question: "What are the 3 main programming languages of the internet?",
        answers: {
            a: 'jQuery, MongoDB, Python',
            b: 'HTML, CSS, JavaScript',
            c: 'C++, CSharp, Unity',
        },
        correctAnswer: 'b'
    },
    {
        question: "What is one way you can make a website mobile-friendly?",
        answers: {
            a: 'Media Queries',
            b: 'Smaller font sizes',
            c: 'You dont mobile users do not matter',
        },
        correctAnswer: 'a'
    },

]

//I am going to need a few main functions, one that displays the question
//and answers, one that shows the results at the end, one that handles the timer,
//and one that stores the data and adds to scoreboard.