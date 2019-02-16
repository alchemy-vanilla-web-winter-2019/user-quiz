const quizForm = document.getElementById('quiz-form');
import topScore from '../../src/favorite-emotion/favorite-emotion.js';
import topColor from '../../src/favorite-shape/favorite-shape.js';
import bestHeath from '../favorite-heath/favorite-heath.js';
const userName = document.getElementById('user-name');

let json = window.localStorage.getItem('userProfile');
const singleUser = JSON.parse(json);
userName.textContent = singleUser.name;

quizForm.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(quizForm);

    const answers = {
        favorite: formData.get('favorite'),
        shapes: formData.get('shapes'),
        heath: formData.get('heath')
    };

    const scorecard = {
        melancholic: 0,
        euphoric: 0,
        enraged: 0
    };

    bestHeath(answers.heath, scorecard);
    topScore(answers.favorite, scorecard);
    topColor(answers.shapes, scorecard);
    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);

    window.location = 'results.html';

});