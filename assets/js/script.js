//Open modal when rules btn is clicked
// Gets id's and classes from the dom
let modal = document.getElementById("rules-modal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// Opens the modal when the user clicks the rules btn
btn.onclick = function () {
  modal.style.display = "block";
}

// Closes the modal when user clicks on <span> (x)
span.onclick = function () {
  modal.style.display = "none";
}

// Quiz questions and answers
let quizQuestions = [{
    question: "What is the approximate population of Guernsey?",
    answers: [{
        text: "68 000",
        correct: true
      },
      {
        text: "52 000",
        correct: false
      },
      {
        text: "37 000",
        correct: false
      },
    ]
  },
  {
    question: "How many parishes does Guernsey have?",
    answers: [{
        text: "5",
        correct: false
      },
      {
        text: "8",
        correct: false
      },
      {
        text: "10",
        correct: true
      },
    ]
  },
  {
    question: "Do car registrations in Guernsey have...",
    answers: [{
        text: "Numbers ans letters",
        correct: false
      },
      {
        text: "Numbers only",
        correct: true
      },
      {
        text: "Letters only",
        correct: false
      },
    ]
  },
  {
    question: "What did the Romans call Guernsey?",
    answers: [{
        text: "Hispania",
        correct: false
      },
      {
        text: "Ella",
        correct: false
      },
      {
        text: "Sarnia",
        correct: true
      },
    ]
  },
  {
    question: "What is the capital of Guernsey?",
    answers: [{
        text: "St Anne",
        correct: false
      },
      {
        text: "St Peters Port",
        correct: true
      },
      {
        text: "St Malo",
        correct: false
      },
    ]
  },
  {
    question: "What colour does the post boxes in Guernsey have?",
    answers: [{
        text: "Yellow",
        correct: false
      },
      {
        text: "Red",
        correct: false
      },
      {
        text: "Blue",
        correct: true
      },
    ]
  },
  {
    question: "Which of the following is a Guernsey airline?",
    answers: [{
        text: "Ryan Air",
        correct: false
      },
      {
        text: "Easy Jet",
        correct: false
      },
      {
        text: "Aurigny",
        correct: true
      },
    ]
  },
  {
    question: "What day does Guernsey celebrate Liberation Day?",
    answers: [{
        text: "9th May",
        correct: false
      },
      {
        text: "1th May",
        correct: false
      },
      {
        text: "6th May",
        correct: true
      },
    ]
  },
];

let score = 0;
let questionIndex = 0;

// Add event listener to submit btn
document.getElement("submit-answ").addEventListener("click", submitAnswer);