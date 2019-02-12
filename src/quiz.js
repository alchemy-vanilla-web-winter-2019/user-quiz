import getLocalStorage from './useful/get-local-storage.js';
import storeLocalStorage from './useful/store-local-storage.js';

import scoreRange from './scoring/score-range.js';
import scoreType from './scoring/score-type.js';
import scoreEngage from './scoring/score-engage.js';
import scoreGrouping from './scoring/score-grouping.js';

// Place name and avatar on top
const profileObj = getLocalStorage('profile');
const quizTakerEl = document.getElementById('quiz-taker');
quizTakerEl.textContent = profileObj.name;
const avatarImageEl = document.getElementById('avatar-image');
avatarImageEl.src = './assets/' + profileObj.avatar + '-icon.png';

// Submit form
const quizFormEl = document.getElementById('quiz-form');
quizFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(quizFormEl);
    const answersObj = makeAnswersObj(formData);
    const scorecard = makeScorecard(answersObj);
    storeLocalStorage('scorecard', scorecard);

    window.location = './results.html';
});

function makeAnswersObj(formData) {
    const answersObj = {
        range: formData.get('range'),
        type: formData.get('type'),
        engage: formData.get('engage'),
        grouping: formData.get('grouping')
    };
    return answersObj;
}

// Create scorecard and distribute answer weights
function makeScorecard(answersObj) {
    const scorecard = {
        assassin: 0,
        fighter: 0,
        mage: 0,
        marksman: 0,
        support: 0,
        tank: 0
    };

    scoreRange(answersObj.range, scorecard);
    scoreType(answersObj.type, scorecard);
    scoreEngage(answersObj.engage, scorecard);
    scoreGrouping(answersObj.grouping, scorecard);

    return scorecard;
}