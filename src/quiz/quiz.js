import quizResults from '../results/quiz-results.js';

const quizForm = document.getElementById('quiz-form');
const resultBox = document.getElementById('result-box');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    let choices = {
        time: formData.get('time')
    };
    
    const result = quizResults(choices);
    const resultText = document.createElement('h2');
    resultText.innerHTML = 'your ideal color: ' + result;
    resultBox.appendChild(resultText);
    
    console.log('result', result);
        
});
