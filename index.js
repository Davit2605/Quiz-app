const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quizEl = document.getElementById("quiz");
const QuestionEls = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");

let score = 0;
let currentData = 0;

loadQuiz();

function loadQuiz() {
  removeChecked();
  const currentQuizData = quizData[currentData];

  QuestionEls.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function removeChecked() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function currentChecked() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = currentChecked();

  if (answer) {
    if (answer === quizData[currentData].correct) {
      score++;
    }
    currentData++;
  }

  if (currentData < quizData.length) {
    loadQuiz();
  } else {
    quizEl.innerHTML = `
    
    <h1> You answered ${score}/${quizData.length} questions correctly</h1>

    <button onclick="location.reload()">Reload</button>
    `;
  }
});
