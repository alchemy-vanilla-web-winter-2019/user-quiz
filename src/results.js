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
const explanationNode = document.getElementById('explanation');
const picResultsNode = document.getElementById('pic-result');

const finalResult = displayResult(answers);

resultsNode.textContent = finalResult;

const pic = document.createElement('img');

if(finalResult === 'banana') {
    explanationNode.textContent = 'You are a strong, goofy person with a bit of a tropical flair about you.';
    pic.src = '/assets/banana.jpg';
    picResultsNode.appendChild(pic);
}

else if(finalResult === 'apple') {
    explanationNode.textContent = 'You are a sweet, traditional person with a bit of a bite.';
    pic.src = '/assets/apple.jpg';
    picResultsNode.appendChild(pic);
}

else if(finalResult === 'blueberry') {
    explanationNode.textContent = 'You are a dark, mysterious person with sophisticated tastes.';
    pic.src = '/assets/blueberry.png';
    picResultsNode.appendChild(pic);
}

else if(finalResult === 'kiwi') {
    explanationNode.textContent = 'You are a wild-child with few worries and even fewer inhibitions.';
    pic.src = '/assets/kiwi.jpg';
    picResultsNode.appendChild(pic);
}

else {
    explanationNode.textContent = 'You are inscrutable. Try taking the quiz again!';
    pic.src = '/assets/shrug.jpeg';
    picResultsNode.appendChild(pic);
}
