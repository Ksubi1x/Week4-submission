
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What is CSS used for?",
        a: "To build a website",
        b: "To design a website",
        c: "To hack a website",
        d: "To destroy a website",
        correct: "b",
    },
    {
        question: "What kind of dog do you think I have?",
        a: "Blue nose Pitbull",
        b: "Golden Retriever",
        c: "Husky",
        d: "Shiba Inu",
        correct: "a",
    },
    {
        question: "How many fingers does an octopus have?",
        a: "8",
        b: "6",
        c: "5",
        d: "0",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Score: ${score}/${quizData.length}.</h2>
           <button onclick="location.reload()">Restart Quiz</button>
           `
       }
    }
})