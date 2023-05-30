var questions = [
  {
    question: "¿Cuál de los siguientes microorganismos es responsable de la fermentación láctica?",
    options: ["Bacterias", "Virus", "Hongos", "Protozoos"],
    answer: 0
  },
  {
    question: "¿Cuál de las siguientes enfermedades es causada por un virus?",
    options: ["Influenza", "Salmonelosis", "Tuberculosis", "Candidiasis"],
    answer: 0
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es verdadera sobre las bacterias?",
    options: ["Son organismos eucariotas.", "Solo se reproducen de forma asexual.", "Son siempre perjudiciales para los seres humanos.", "Pueden ser beneficiosas para el medio ambiente y la salud humana."],
    answer: 3
  },
  {
    question: "¿Cuál de los siguientes microorganismos es responsable de la producción de antibióticos?",
    options: ["Bacterias", "Virus", "Hongos", "Protozoos"],
    answer: 0
  },
  {
    question: "¿Cuál de las siguientes opciones describe mejor a los virus?",
    options: ["Son células completas con núcleo y orgánulos.", "Son organismos unicelulares que realizan la fotosíntesis.", "No están vivos y necesitan un huésped para reproducirse.", "Son organismos multicelulares que se agrupan en tejidos."],
    answer: 2
  },
  {
    question: "¿Cuál de los siguientes microorganismos es responsable de la enfermedad del sarampión?",
    options: ["Bacterias", "Virus", "Hongos", "Protozoos"],
    answer: 1
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es verdadera sobre las células procariotas?",
    options: ["Tienen un núcleo definido.", "Carecen de membrana plasmática.", "Son más grandes y complejas que las células eucariotas.", "Su material genético se encuentra disperso en el citoplasma."],
    answer: 3
  },
  {
    question: "¿Cuál de los siguientes microorganismos es utilizado en la producción de pan y cerveza?",
    options: ["Bacterias", "Virus", "Hongos", "Protozoos"],
    answer: 2
  },
  {
    question: "¿Cuál de las siguientes enfermedades es causada por un protozoo?",
    options: ["Neumonía", "Malaria", "Gripe", "Hepatitis"],
    answer: 1
  },
  {
    question: "¿Cuál de las siguientes opciones describe mejor a las células eucariotas?",
    options: ["Carecen de un núcleo definido.", "Son siempre unicelulares.", "Tienen una organización más simple que las células procariotas.", "Tienen un núcleo definido y orgánulos celulares."],
    answer: 3
  }
];

var currentQuestion = 0;
var score = 0;
var timeRemaining = 60; // Tiempo restante en segundos

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var scoreValueElement = document.getElementById("score-value");
var timerElement = document.getElementById("timer");

var nextButton = document.getElementById("next-button");

// Función para cargar una nueva pregunta
function loadQuestion() {
  var question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";

  for (var i = 0; i < question.options.length; i++) {
    var option = document.createElement("button");
    option.className = "option";
    option.textContent = question.options[i];
    option.onclick = checkAnswer;
    optionsElement.appendChild(option);
  }
}

// Función para verificar la respuesta seleccionada
function checkAnswer(event) {
  var selectedOption = event.target;
  var question = questions[currentQuestion];

  if (question.answer === Array.from(optionsElement.children).indexOf(selectedOption)) {
    selectedOption.style.backgroundColor = "#4caf50";
    score++;
  } else {
    selectedOption.style.backgroundColor = "#f44336";
  }

  Array.from(optionsElement.children).forEach(function (option) {
    option.onclick = null;
  });

  nextButton.disabled = false;
}

// Función para mostrar la siguiente pregunta
function showNextQuestion() {
  currentQuestion++;
  nextButton.disabled = true;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

// Función para mostrar la puntuación final
function showFinalScore() {
  questionElement.textContent = "Juego terminado";
  optionsElement.innerHTML = "";
  scoreValueElement.textContent = score;
}

// Función para actualizar el temporizador cada segundo
function updateTimer() {
  timerElement.textContent = timeRemaining + " segundos restantes";

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    showFinalScore();
  }

  timeRemaining--;
}

// Iniciar el juego
loadQuestion();
nextButton.addEventListener("click", showNextQuestion);

// Iniciar el temporizador
var timerInterval = setInterval(updateTimer, 1000);




