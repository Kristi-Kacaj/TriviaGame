$(document).ready(function () {
    //Array for the questions, choices, and answer
const triviaQuestions = [
    {
        question: "What does Sheldon's mom call him?",
        choices: ["Sheldon","Pumpkin", "Shelly", "Doc"],
        answer: "Shelly",
    },
    {
        question: "Who is the only member of the cast to hold a PhD in real life?",
        choices: ["Jim Parsons", "Johnny Galecki", "Mayim Bialik", "Kaley Cuoco"],
        answer: "Mayim Bialik",
    },
    {
       question: "Where do Sheldon, Amy, Raj, Howard, and Leonard work?",
       choices: ["Caltech", "UCLA", "USC", "Cal Poly"],
       answer: "Caltech",
    },
    {
        question: "Who officiates Sheldon and Amy's wedding?",
        choices: ["Wil Wheaton", "Raj", "Mark Hamill", "Leonard"],
        answer: "Mark Hamill",
    },
    {
        question: "How many times does Sheldon have to knock on a door and say a person's name before he'll go in?",
        choices: ["1","2","3","4"],
        answer: "3",
    }
]

//Set global variables
let counter = 15;
let currQuestion = 0;
let score = 0;
let lost = 0;
let timer;

//Cycles through all of the questions and ends the game after last question in the array
function nextQuestion() {
    const questionsOver = (triviaQuestions.length - 1) === currQuestion;
    if (questionsOver) {
        console.log('Game over!');
    } else{
    currQuestion++;
    getQuestions();
    }
}

//Stops timer at 0. Mover to next question when timer runs out.
function timesUp() {
    clearInterval(timer);
    lost++;
    nextQuestion();
}

//Starts a 15 second countdown
function countDown() {
    counter--;

    $('#time').html('Timer: ' + counter);

    if (counter ===0) {
        timesUp();
    }
}

// Displays the question and timer
function getQuestions() {
    counter = 15;
    timer = setInterval(countDown, 1000);

    const question = triviaQuestions[currQuestion].question;
    const choices = triviaQuestions[currQuestion].choices;

    $('#time').html('Timer: ' + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${getChoices(choices)}
    `);
    
}

//Displays the choices
function getChoices(choices) {
    let result = '';
    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;
}

getQuestions();
})