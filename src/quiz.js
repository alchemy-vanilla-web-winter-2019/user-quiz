import scoreAllergic from './questions/score-allergic.js';
import scoreCoffee from './questions/score-coffee.js';
import scoreSocialism from './questions/score-socialism.js';


// create rendered user name and avatar
const json = window.localStorage.getItem('profile');
const userProfile = JSON.parse(json);

const userProfileName = document.getElementById('user-profile-name');
const userProfileImage = document.getElementById('user-profile-image');
userProfileName.textContent = userProfile.name;
userProfileImage.src = './assets/' + userProfile.avatar + '.png';


const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);
    const answers = {
        allergic: formData.get('allergic'),
        coffee: formData.get('coffee'),
        socialism: formData.get('socialism')
    };

    const scorecard = { yes: 0, no: 0, eh: 0 };

    scoreAllergic(answers.allergic, scorecard);
    scoreCoffee(answers.coffee, scorecard);
    scoreSocialism(answers.socialism, scorecard);

    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);

    window.location = './result.html';

});

console.log('hello');