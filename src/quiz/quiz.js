import evaluateQuiz from '../quiz-results/evaluate-quiz/evaluate-quiz.js';

const userProfile = JSON.parse(window.localStorage.getItem('userProfile'));

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;

const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const quizFormData = new FormData(quizForm);

    const answers = {
        players: quizFormData.get('players')
    };

    const quizResult = evaluateQuiz(answers);

    console.log(quizResult);
});