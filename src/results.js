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
const picResultsNode = document.getElementById('pic-result');

const finalResult = displayResult(answers);

resultsNode.textContent = finalResult;

const pic = document.createElement('img');

if(finalResult === 'banana') {
    pic.src = '/assets/banana.jpg';
    picResultsNode.appendChild(pic);
}

else if(finalResult === 'apple') {
    pic.src = '/assets/apple.jpg';
    picResultsNode.appendChild(pic);
}

else if(finalResult === 'blueberry') {
    pic.src = '/assets/blueberry.png';
    picResultsNode.appendChild(pic);
}

else if(finalResult === 'kiwi') {
    pic.src = '/assets/kiwi.jpg';
    picResultsNode.appendChild(pic);
}

else {
    pic.src = '/assets/shrug.jpeg';
    picResultsNode.appendChild(pic);
}
