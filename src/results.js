import displayResult from '../src/eval/display-results.js';
let answers = {};
const answersJSON = window.localStorage.getItem('answers');
if(answersJSON) {
    answers = JSON.parse(answersJSON);
}
else {
    window.location = '/';
}

const resultsNode = document.getElementById('result');

const finalResult = displayResult(answers);

resultsNode.textContent = finalResult;