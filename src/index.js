import quizResult from './results-calculate/quiz-result.js';

const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        park: formData.get('park')
    };

    const result = quizResult(answers);
    console.log(result);
});