import tally from './tally.js';

const resultsText = document.getElementById('results-text');

let json = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(json);

resultsText.textContent = tally(scorecard);