import scoreFlower from '../questions/score-flower.js';
const quizForm = document.getElementById('quiz-form');


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formDaddy = new FormData(quizForm);
    const answers = {
        flower: formDaddy.get('flower')
    };
    const scorecard = {
        red: 0,
        blue: 0,
        yellow: 0
    };
    scoreFlower(answers.flower, scorecard);

    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);
});
