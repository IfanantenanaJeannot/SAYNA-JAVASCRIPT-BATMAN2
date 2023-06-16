const quizData = [
  {
    question: "Quel est l’autre nom de l’Homme-Mystère ?",
    a: "Le Sphynx",
    b: "Saphir",
    c: "Joker",
    correct: "c",
  },
  {
    question: "Quelle est l’ancienne profession de Harley Quinn ?",
    a: "Infirmière",
    b: "Psychiatre",
    c: "Dentiste",
    correct: "b",
  },
  {
    question: "Quel est l’objet fétiche de Double Face ?",
    a: "Une pièce",
    b: "Un livre",
    c: "Un couteau",
    correct: "a",
  },
  {
    question: "Quelle ville Batman défend-il ?",
    a: "Gotham City ",
    b: "Starling City ",
    c: "Hell’s Kitchen ",
    correct: "b",
  },
  {
    question: "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
    a: "Georges Clooney",
    b: "Val Kilmer",
    c: "Mickael Keaton",
    correct: "b",
  },
  {
    question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
    a: "Le Pingouin ",
    b: "L’Homme Mystère",
    c: "Le Joker",
    correct: "b",
  },
  {
    question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
    a: "Elaine et Georges",
    b: "Martha et James ",
    c: "1994",
    correct: "b",
  },
  {
    question: "Qui interprète le Joker en 2008 ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "En quelle année Robin fait il sa première apparition ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "Qui est Jonathan Crane ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "Batman c’est aussi le nom d’une ville en...",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "Qui a produit Batman en 1964 ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
  {
    question: "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
    a: "1996",
    b: "1995",
    c: "1994",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  const text = quiz.innerHTML
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      var scr = score;
  if (score < 6) {
    quiz.innerHTML = `
            <h2>${score}/${quizData.length} tu dois améliorer</h2>
            <p>kjsdmflqkjdmlfjqmlfjoezrarkjarjmlakjr</p>
            <button onclick="history.go(0)">Play Again</button>`;
  } else if (score <11) {
    quiz.innerHTML = `
            <h2>${score}/${quizData.length} pas mal bros</h2>
            <p>kjsdmflqkjdmlfjqmlfjoezrarkjarjmlakjr</p>
            <button onclick="history.go(0)">Play Again</button>`;
  } else {
    quiz.innerHTML = `
            <h2>${score}/${quizData.length} bravo</h2>
            <p>kjsdmflqkjdmlfjqmlfjoezrarkjarjmlakjr</p>
            <button onclick="history.go(0)">Voir resultat</button>`;
  }
      
    }
  }
});



/*quiz.innerHTML = `
            <h2>${score}/${quizData.length} questions correctly</h2>
            <p>kjsdmflqkjdmlfjqmlfjoezrarkjarjmlakjr</p>
            <button onclick="history.go(0)">Play Again</button>
        `;*/