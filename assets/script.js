//added variable for questions
var questions = [{
    q: " What was the top grossing movie made by Hayao Miyazaki ? ",
    a: "1. Ponyo",
    b: "2. Howl's Moving Castle",
    c: "3. Princess Mono",
    d: "4. Spirited Away",
    correct: "4. Spirited Away",
},
{
    q:" How many Dragon Balls are there ? ",
    a: "1. 50 Dragon Balls",
    b: "2. 5 Dragon Balls",
    c: "3. 24 Dragon Balls",
    d: "4. 7 Dragon Balls",
    correct: "4. 7 Dragon Balls",
},
{
    q: " In the anime 'Hunter X Hunter, which family is famous for being assassins ? ",
    a: "1. Weston",
    b: "2. Zoldyck",
    c: "3. Khan",
    d: "4. Sans",
    correct: "2. Zoldyck",

},
{
    q: " Which Anime Protagonist who is half Ghoul and Half Human ? ",
    a: "1. Naruto ",
    b: "2. Gon",
    c: "3. Kaneki",
    d: "4. Ash",
    correct: "3. Kaneki",

},
{
    q: " Who is known as the 'One Punch Man' ? ",
    a: "1. Naruto ",
    b: "2. Saitama ",
    c: "3. Sasuke ",
    d: "4. Itachi ",
    correct: "2. Saitama ",

},
{
    q: "Which of these animes are based on shinobi(Ninjas) ?",
    a: "1. Naruto ",
    b: "2. One Piece",
    c: "3. Hell's Paradise",
    d: "4. Spy Family",
    correct: "1. Naruto",
}];
//Created var for start and duration for the quiz
var clickStart = document.getElementById('start');
var timerEl = document.getElementById('countdown');
var timeLeft = 60;
var quizDuration;
var questionContainer = document.querySelector('#quiz-container');
//added timer functionality
function timer() {
    timerEl.textContent ='Time remaining: ' + timeLeft + 's';
    quizDuration = setInterval(function () {
        if (timeLeft > 0) {
            adjustTime(-1);
        } else {
            endQuizPage();
        }
    }, 1000);
}

function adjustTime(amount) {
    timeLeft += amount;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    timerEl.textContent = 'Time reamaining: ' + timeLeft + 's';
}
//added functionality to timer when 'start quiz' is clicked on 
clickStart.onclick = timer;
var renderQuestion = function (question) {
    questionContainer.innerHTML = '';

    var questionHeader = document.createElement('h2');
    questionHeader.textContent = question.q;

    var answerA = document.createElement('button');
    answerA.textContent = question.a;
    answerA.addEventListener('click', answerClick);

    var answerB = document.createElement('button');
    answerB.textContent = question.b;
    answerB.addEventListener('click', answerClick);

    var answerC = document.createElement('button');
    answerC.textContent = question.c;
    answerC.addEventListener('click', answerClick);

    var answerD = document.createElement('button');
    answerD.textContent = question.d;
    answerD.addEventListener('click', answerClick);

    questionContainer.appendChild(questionHeader);
    questionContainer.appendChild(answerA);
    questionContainer.appendChild(answerB);
    questionContainer.appendChild(answerC);
    questionContainer.appendChild(answerD);
};
//handle user answers, updates the scores and question
var currentQuestionIndex = 0;
var userScore = 0;
var correctAnswer = questions[currentQuestionIndex].correct;
var clickViewScores = document.getElementById("view-score");

var answerClick = function(event) {
    event.preventDefault();
    var userAnswer = event.target.textContent;
    correctAnswer = questions[currentQuestionIndex].correct;
    var answerDetermination = document.querySelector("#answer-determination");
    if (userAnswer !== correctAnswer) {
        adjustTime(-10);
        answerDetermination.textContent = "Wrong!";
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            endQuizPage();
        } else {renderQuestion(questions[currentQuestionIndex])};

    }
    else if (userAnswer === correctAnswer) {
        currentQuestionIndex++;
        answerDetermination.textContent = "Correct!";
        userScore++;
        if (currentQuestionIndex >= questions.length) {
            endQuizPage();
        } else {renderQuestion(questions[currentQuestionIndex])};
    }
};
