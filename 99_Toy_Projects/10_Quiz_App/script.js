const startButton = document.querySelector(".start-btn");
const questionElement = document.querySelector(".question");
const options = document.querySelector(".Options");
const nextBtn = document.querySelector(".next-btn");
let correctOptionButton
let optionSelected  = false
let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: "What is the value of g in m/s²?",
        options: [
            { text: "9.8", correct: true },
            { text: "6.1", correct: false },
            { text: "12.8", correct: false },
            { text: "13.6", correct: false },
        ],
    },
    {
        question: "What is the SI unit of force?",
        options: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false },
        ],
    },
    {
        question:
            "Which law states that for every action, there is an equal and opposite reaction?",
        options: [
            { text: "Newton's First Law", correct: false },
            { text: "Newton's Second Law", correct: false },
            { text: "Newton's Third Law", correct: true },
            { text: "Law of Gravitation", correct: false },
        ],
    },
    {
        question: "What type of energy is stored in a stretched rubber band?",
        options: [
            { text: "Kinetic energy", correct: false },
            { text: "Elastic potential energy", correct: true },
            { text: "Chemical energy", correct: false },
            { text: "Thermal energy", correct: false },
        ],
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: [
            { text: "3 x 10⁸ m/s", correct: true },
            { text: "3 x 10⁶ m/s", correct: false },
            { text: "1.5 x 10⁸ m/s", correct: false },
            { text: "3 x 10¹⁰ m/s", correct: false },
        ],
    },
];

function startGame() {
    startButton.classList.add("hide");

    options.classList.remove("hide");
    questionElement.classList.remove("hide");
    nextBtn.classList.remove("hide");

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    console.log(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(questionObject) {
    questionElement.innerText = questionObject.question;
    questionObject.options.forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.innerText = option.text;

        optionButton.classList.add("btn");

        if (option.correct == true) {
            optionButton.dataset.correct = option.correct;
            correctOptionButton = optionButton
        }

        optionButton.addEventListener("click", selectAnswer);

        options.appendChild(optionButton);
    });
}

function highlightCorrect() {
    correctOptionButton.classList.add('correct')
}

function selectAnswer(e) {
    if(optionSelected) return ;

    optionSelected = true;
    const selectedOption = e.target;
    const isCorrect = selectedOption.dataset.correct;
    if(!isCorrect) {
        highlightCorrect()
    }
    setStatusClass(document.body, isCorrect);
    setStatusClass(selectedOption, isCorrect);


    if(currentQuestionIndex + 1 < shuffledQuestions.length) {
        nextBtn.classList.remove("hide");
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function resetState() {
    optionSelected = false;
    nextBtn.classList.add("hide");
    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }
    clearStatusClass(document.body)
}

startButton.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
