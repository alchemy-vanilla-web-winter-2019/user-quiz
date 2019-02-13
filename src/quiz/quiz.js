import quizResults from '../results/quiz-results.js';

const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    let choices = {
        time: formData.get('time')
    };
    
    const result = quizResults(choices);
    
    console.log('result', result);
        
});
