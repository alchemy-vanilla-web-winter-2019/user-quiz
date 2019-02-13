import tally from './questions/tally.js';

const quizResult = document.getElementById('quiz-result');

const json = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(json);

const result = tally(scorecard);

quizResult.textContent = result;

// how can i make this so yes/no/eh have custom content