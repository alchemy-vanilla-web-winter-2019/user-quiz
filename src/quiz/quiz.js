import surveyResults from './survey-results.js';

const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);
    
    const answers = {
        wealth: formData.get('wealth'),
    };
    const results = surveyResults(answers);
    console.log(results); 
    window.location = 'results.html?character=' + encodeURIComponent(results);
});