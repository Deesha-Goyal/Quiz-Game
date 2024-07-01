const questions = [
    {
        question: "WHAT IS THE FULL FORM OF CPU?",
        answers: [
            { text: "COMPUTER PROCESSING UNIT", correct: false},
            { text: "COMPUTER PRINCIPAL UNIT", correct: false},
            { text: "CENTRAL PROCESSING UNIT", correct: true},
            { text: "CONTROL PROCESSING UNIT", correct: false},
        ]
    },
    {
        question: "WHICH LANGUAGE DOES THE COMPUTER UNDERSTAND?",
        answers: [
            {text: "C LANGUAGE", correct: false},
            {text: "BINARY LANGUAGE", correct: true},
            {text: "ENGLISH LANGUAGE", correct: false},
            {text: "ASSEMBLY LANGUAGE", correct: false},
        ]
    },
    {
        question: "WHICH COMPUTER LANGUAGE IS WRITTEN IN BINARY CODES ONLY?",
        answers: [
            {text: "MACHINE LANGUAGE", correct: true},
            {text: "C#", correct: false},
            {text: "PASCAL", correct: false},
            {text: "ENGLISH LANGUAGE", correct: false},
        ]
    },
    {
        question: "WHICH OF THE FOLLOWING IS THE BRAIN OF THE COMPUTER?",
        answers: [
            {text: "MEMORY", correct: false},
            {text: "ARITHMETIC AND LOGICAL UNIT", correct: false},
            {text: "CONTROL UNIT", correct: false},
            {text: "CENTRAL PROCESSING UNIT", correct: true},
        ]
    },
    {
        question: "WHICH OF THE FOLLOWING IS NOT A CHARACTERISTIC OF A COMPUTER?",
        answers: [
            {text: "VERSATILITY", correct: false},
            {text: "ACCURACY", correct: false},
            {text: "DELIGENCY", correct: false},
            {text: "I.Q.", correct: true},
        ]
    },
    {
        question: "WHICH OF THE FOLLOWING IS THE SMALLEST UNIT OF DATA IN A COMPUTER?",
        answers: [
            {text: "BIT", correct: true},
            {text: "KB", correct: false},
            {text: "MB", correct: false},
            {text: "BYTE", correct: false},
        ]
    },
    {
        question: "WHICH MONITOR LOOKS LIKE A TELEVISION AND IS NORMALLY USED WITH NON- PORTABLE COMPUTER SYSTEMS?",
        answers: [
            {text: "LED", correct: false},
            {text: "LCD", correct: false},
            {text: "CRT", correct: true},
            {text: "FLAT PANEL MONITORS", correct: false},
        ]
    },
    {
        question: "WHICH OF THE FOLLOWING IS NOT A TYPE OF COMPUTER CODE?",
        answers: [
            {text: "ASCII", correct: false},
            {text: "BCD", correct: false},
            {text: "EDIC", correct: true},
            {text: "EBCDIC", correct: false},
        ]
    },
    {
        question: "WHICH OF THE FOLLOWING IS DESIGNED TO CONTROL THE OPERATIONS OF A COMPUTER?",
        answers: [
            {text: "SYSTEM SOFTWARE", correct: true},
            {text: "APPLICATION SOFTWARE", correct: false},
            {text: "UTILITY SOFTWARE", correct: false},
            {text: "USER", correct: false},
        ]
    },
    {
        question: "WHICH OF THE FOLLOWING DEVICE USE POSITIONAL NOTATION TO REPRESENT A DECIMAL NUMBER?",
        answers: [
            {text: "PASCALINE", correct: false},
            {text: "ABACUS", correct: true},
            {text: "COMPUTER", correct: false},
            {text: "CALCULATOR", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `YOU SCORED ${score} OUT OF ${questions.length}!`;
    nextButton.innerHTML = "PLAY AGAIN";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();