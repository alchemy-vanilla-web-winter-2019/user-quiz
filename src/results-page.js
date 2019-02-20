import calculateResults from './quiz-results.js';

let answers = null;

const json = window.localStorage.getItem('answers');
if(json) {
    answers = JSON.parse(json);
}
else {
    window.location = './';
}

const movieNode = document.getElementById('movie');

movieNode.textContent = calculateResults(answers);