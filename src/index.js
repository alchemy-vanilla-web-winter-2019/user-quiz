import quizResult from './results-calculate/quiz-results.js';

const quizForm = document.getElementById('quiz'); 

quizForm.addEventListener('submit', function(event) { 
    event.preventDefault();
   
    const formData = new FormData(quizForm);

    const answers = {
        flavor: formData.get('flavor')
    };
    quizResult(answers);
});

