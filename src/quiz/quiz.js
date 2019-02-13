import evaluateQuiz from '../quiz-results/evaluate-quiz/evaluate-quiz.js';

const userProfile = JSON.parse(window.localStorage.getItem('userProfile'));

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;
userNameDisplay.classList.add(userProfile.color);

const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const quizFormData = new FormData(quizForm);

    const answers = {
        players: quizFormData.get('players'),
        movie: quizFormData.get('movie'),
        kill: quizFormData.get('kill')
    };

    console.log(answers);

    const quizResult = evaluateQuiz(answers);
    
    userProfile.result = quizResult;

    const userProfileString = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', userProfileString);

    // window.location = './result.html';
});