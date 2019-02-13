import resultCalculate from '../src/result-calculate.js';
import scorePoison from '../src/poison-score.js';
import scoreAccessory from '../src/accessory-score.js';
import scoreColor from '../src/color-score.js';

const userName = document.getElementById('name');
const result = document.getElementById('result');
const jsonString = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonString);
userName.textContent = userInfo.name;

const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const formData = new FormData(quizForm);
    
    const answers = {
        poison: formData.get('poison'),
        accessory: formData.get('accessory'),
        color: formData.get('color')
    };
  
    const scorecard = {
        morrison: 0,
        winehouse: 0,
        hendrix: 0,
        joplin: 0
    };
    
    scorePoison(answers.poison, scorecard);
    scoreAccessory(answers.accessory, scorecard);
    scoreColor(answers.color, scorecard);
    
    const finalResult = resultCalculate(scorecard);

    result.textContent = finalResult;
});