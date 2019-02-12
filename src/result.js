import calculateResult from "./calculate/calculate-result.js";

const resultNode = document.getElementById('result');
const jsonAnswer = window.localStorage.getItem('answers');
if(!jsonAnswer) {
    window.location = 'quiz.html';
}
const answer = JSON.parse(jsonAnswer);

const result = calculateResult(answer);

resultNode.textContent = result;

const back = document.getElementById('back');
back.addEventListener('click', function() {
    window.location = 'quiz.html';
});