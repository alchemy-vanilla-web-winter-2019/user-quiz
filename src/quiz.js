import scoreAllergic from './questions/score-allergic.js';

const quizForm = document.getElementById('quiz-form');

// create rendered user name and avatar

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);
    const answers = {
        allergic: formData.get('allergic')
    };

    
    

    const scorecard = { yes: 0, no: 0, eh: 0 };

    scoreAllergic(answers.allergic, scorecard);

    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);

});

console.log('hello');