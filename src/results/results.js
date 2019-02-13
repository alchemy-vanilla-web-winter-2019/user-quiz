const json = window.localStorage.getItem('pokequiz');
import calculateResults from './calculations/calculate-results.js';
const answers = JSON.parse(json);
if(!json) {
    window.location = './';
}

const resultNode = document.getElementById('result');

resultNode.textContent = calculateResults(answers);