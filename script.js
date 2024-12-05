import { questions } from './src/questions/index.js';
import { getRandomQuestions } from './src/utils.js';

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    currentQuestions = getRandomQuestions(questions, 10);
    document.getElementById('quiz').classList.remove('hide');
    document.getElementById('results').classList.add('hide');
    showQuestion();
}

function showQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Вопрос ${currentQuestionIndex + 1} из 10: ${questionData.question}`;
    
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    questionData.choices.forEach((choice, index) => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.textContent = choice;
        choiceElement.addEventListener('click', () => selectChoice(choiceElement));
        choicesContainer.appendChild(choiceElement);
    });
}

function selectChoice(choiceElement) {
    document.querySelectorAll('.choice').forEach(choice => {
        choice.classList.remove('selected');
    });
    choiceElement.classList.add('selected');
}

function checkAnswer() {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice) {
        alert('Пожалуйста, выберите ответ');
        return;
    }

    const selectedAnswer = Array.from(document.querySelectorAll('.choice')).indexOf(selectedChoice);
    if (selectedAnswer === currentQuestions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz').classList.add('hide');
    document.getElementById('results').classList.remove('hide');
    document.getElementById('score').textContent = score;
}

document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('restart').addEventListener('click', startQuiz);

startQuiz();
