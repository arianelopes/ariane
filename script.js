const quizData = [
    {
        question: "Qual tag HTML é usada para definir um parágrafo?",
        a: "div",
        b: "p",
        c: "span",
        d: "h1",
        correct: "b",
    },
    {
        question: "Qual propriedade CSS é usada para alterar a cor do texto?",
        a: "background-color",
        b: "color",
        c: "border-color",
        d: "font-size",
        correct: "b",
    },
    {
        question: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        a: "variable name = value",
        b: "var name = value",
        c: "var name = value",
        d: "declare name = value",
        correct: "b",
    },
    {
        question: "Qual é o uso da tag <a> em HTML?",
        a: "Para criar uma tabela",
        b: "Para definir uma imagem",
        c: "Para criar um link",
        d: "Para definir um título",
        correct: "c",
    },
    {
        question: "Qual é o valor padrão da propriedade display para elementos HTML?",
        a: "none",
        b: "inline",
        c: "block",
        d: "flex",
        correct: "c",
    },
]  

const quiz = document.getElementById('quiz')
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
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})