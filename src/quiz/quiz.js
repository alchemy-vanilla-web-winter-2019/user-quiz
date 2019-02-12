const quizForm = document.getElementById('quiz-form');
import scoreFavorite from '../calculate-results/favorite/score-favorite.js';

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);

    const answers = {
        favorite: formData.get('favorite') 
    };

    const scorecard = {
        ocean: 0,
        sun: 0,
        grass: 0
    };

    scoreFavorite(answers.favorite, scorecard);
    const stringed = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', stringed);
    
    console.log(answers);

    window.location = 'results.html';

});