import tally from '../../src/results/tally.js';

const resultText = document.getElementById('results-text');
const userName = document.getElementById('user-name');

let jsonName = window.localStorage.getItem('userProfile');
const singleUser = JSON.parse(jsonName);
userName.textContent = singleUser.name;

let json = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(json);

resultText.textContent = tally(scorecard);