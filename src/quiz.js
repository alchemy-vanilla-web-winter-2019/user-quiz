import resultCalculate from '../src/result-calculate.js';
import scorePoison from '../src/poison-score.js';

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
    const finalResult = resultCalculate(scorecard);

    result.textContent = finalResult;

    //result.textContent = 

});