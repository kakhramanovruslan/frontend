const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of Kazakhstan?",
        options: ["Berlin", "Madrid", "Astana", "Rome"],
        correctAnswer: "Astana"
    },
    {
        question: "What is the chemical symbol for hydrogen?",
        options: ["Au", "Ag", "H", "Fe"],
        correctAnswer: "H"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;
let userAnswers = [];

function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    timeLeft = 30;
    startTimer();

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        button.addEventListener("click", function() {
            checkAnswer(option);
        });
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    userAnswers.push({ question: currentQuestion.question, selected: selectedOption, correct: currentQuestion.correctAnswer });

    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById("timer").textContent = timeLeft;

    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            userAnswers.push({
                question: quizQuestions[currentQuestionIndex].question,
                selected: "No Answer",
                correct: quizQuestions[currentQuestionIndex].correctAnswer
            });
            currentQuestionIndex++;

            if (currentQuestionIndex < quizQuestions.length) {
                displayQuestion();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

function endQuiz() {
    const scorePercentage = ((score / quizQuestions.length) * 100).toFixed(2);

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${quizQuestions.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
        <h3>Answers Summary:</h3>
    `;

    userAnswers.forEach((answer, index) => {
        const answerText = document.createElement("p");
        answerText.innerHTML = `
            Question ${index + 1}: ${answer.question}<br>
            Your Answer: ${answer.selected} ${answer.selected === answer.correct ? "(Correct)" : "(Incorrect)"}<br>
            Correct Answer: ${answer.correct}
        `;
        questionContainer.appendChild(answerText);
    });

    document.getElementById("timer-container").style.display = "none";
}

document.getElementById("start-button").addEventListener("click", startQuiz);
