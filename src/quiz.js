import scoreRange from './scoring/score-range.js';
import scoreType from './scoring/score-type.js';
import scoreEngage from './scoring/score-engage.js';
import scoreGrouping from './scoring/score-grouping.js';

const profileJson = window.localStorage.profile;
const profileObj = JSON.parse(profileJson);
const quizTakerEl = document.getElementById('quiz-taker');
quizTakerEl.textContent = profileObj.name;

const quizFormEl = document.getElementById('quiz-form');
quizFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(quizFormEl);
    const answersObj = makeAnswersObj(formData);
    const scorecard = makeScorecard(answersObj);
    storeScorecard(scorecard);

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

function storeScorecard(scorecard) {
    const scorecardJson = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', scorecardJson);
}