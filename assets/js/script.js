// Questions and answers
let quizQuestions = [{
    question: "1. What is the approximate population of Guernsey?",
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
    question: "2. How many parishes does Guernsey have?",
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
    question: "3. Do car registrations in Guernsey have...",
    answers: [{
        text: "Numbers and letters",
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
    question: "4. What did the Romans call Guernsey",
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
    question: "5. What is the capital of Guernsey?",
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
    question: "6. What colour does the post boxes in Guernsey have?",
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
    question: "7. Which of the following is a Guernsey airline?",
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
    question: "8. What day does Guernsey celebrate Liberation Day?",
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

// Hide Check answers btn
document.getElementById("check-answers").style.visibility = "hidden";

// Display first question
displayQuestion();

// Event listener submit button
document.getElementById("submit-answ").addEventListener("click", submitAnswer);

/**
 * Function to display current question and answers
 */
function displayQuestion() {
  let question = quizQuestions[questionIndex];
  document.getElementById("question").textContent = question.question;

  let quizAnswers = "";
  for (let i = 0; i < question.answers.length; i++) {
    quizAnswers += "<div><label><input type='radio' name='answer' value='" + i + "' aria-label='Answer'" + question.answers[i].text + "</label></div>";
  }
  document.getElementById("answers").innerHTML = quizAnswers;
}

/**
 * Function to submit answer, collect score, move on to next question or end quiz
 */
function submitAnswer() {
  let selectedAnswer = document.querySelector("input[name='answer']:checked");
  if (!selectedAnswer) {
    alert("You forgot to choose an answer. Try again!");
  }

  let answerIndex = parseInt(selectedAnswer.value);
  let answer = quizQuestions[questionIndex].answers[answerIndex];
  if (answer.correct) {
    document.getElementById("result");
    score++;
  } else {
    document.getElementById("result");
  }

  questionIndex++;
  if (questionIndex >= quizQuestions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

/**
 * Function display final score and comments. Create and show smiley img if score > 5
 */
function endQuiz() {
  document.getElementById("question").textContent = "Congratulations on completing the Guernsey Quiz!";
  document.getElementById("answers").innerHTML = "You scored " + score + " out of " + quizQuestions.length + " questions";
  document.getElementById("submit-answ").style.display = "none";
  if (score >= 5) {
    document.getElementById("comment").innerHTML = "Good job, you are a Guernsey expert!";
  } else {
    document.getElementById("comment").innerHTML = "Oops..better luck next time!";
  }
  document.getElementById("check-answers").style.visibility = "visible";

  // Partially copied code (link to source in README - credits)
  let src = document.getElementById("img-happy");
  let img = document.createElement("img");
  img.src = "assets/images/happyface.png";
  img.style.height = "50px";
  img.style.width = "50px";
  src.appendChild(img);

  if (score >= 5) {
    document.getElementById("img-happy").style.visibility = "visible";
  } else {
    document.getElementById("img-happy").style.display = "none";
  }
}