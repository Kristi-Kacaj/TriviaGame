const questions = [
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
       question: "?Where do Sheldon, Amy, Raj, Howard, and Leonard work?",
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

let countdown = 15;
let currQuestion = 0;
let score = 0;
let lost = 0;
let timer;
