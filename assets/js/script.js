

// Questions and answers
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
  question: "What did the Romans call Guernsey",
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
          text: "St Peter Port",
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
          correct: true
      },
      {
          text: "1th May",
          correct: false
      },
      {
          text: "6th May",
          correct: false
      },
  ]
}
];


let score = 0;
let questionIndex = 0;

// Display first question
displayQuestion();

// Event listener submit button
document.getElementById("submit").addEventListener("click", submitAnswer);

// Function to display current question and answers
function displayQuestion() {
let question = quizQuestions[questionIndex];
document.getElementById("question").textContent = question.question;

let quizAnswers = "";
for (let i = 0; i < question.answers.length; i++) {
  quizAnswers += "<div><input type='radio' name='answer' value='" + i + "'> " + question.answers[i].text + "</div>";
}
document.getElementById("answers").innerHTML = quizAnswers;
}






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