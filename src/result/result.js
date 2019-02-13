import calculateResult from './calculation/calculate-result.js';
let result = null;
const json = window.localStorage.getItem('answers');
const jsonName = window.localStorage.getItem('user');

const imageNode = document.getElementById('image');
const bioNode = document.getElementById('bio');
const resultNode = document.getElementById('girl');
const userNode = document.getElementById('user');

if(json) {
    result = JSON.parse(json);
}
else {
    window.location = './';
}

let userName = null;

if(jsonName) {
    userName = JSON.parse(jsonName);
}

let name = userName.name;


resultNode.textContent = calculateResult(result);
userNode.textContent = name;

if(resultNode.textContent === 'Sophia') {
    bioNode.textContent = 'You\'re old & sassy & everyone\'s mom';
    imageNode.src = '../src/assets/sophia.jpeg';
}
else if(resultNode.textContent === 'Dorothy') {
    bioNode.textContent = 'You\'re tall & no-nonsense';
    imageNode.src = '../src/assets/dorothy.jpeg';
}
else if(resultNode.textContent === 'Rose') {
    bioNode.textContent = 'You\'re dim but cute & kind';
    imageNode.src = '../src/assets/rose.jpeg';
}
else if(resultNode.textContent === 'Blanche') {
    bioNode.textContent = 'You\'re sexy';
    imageNode.src = '../src/assets/blanche.jpeg';
}
else if(resultNode.textContent === 'Blanche') {
    bioNode.textContent = 'You\'re sexy';
    imageNode.src = '../src/assets/blanche.jpeg';
}
else {
    bioNode.textContent = 'People tolerate you';
    imageNode.src = '../src/assets/stan.jpeg';
}

