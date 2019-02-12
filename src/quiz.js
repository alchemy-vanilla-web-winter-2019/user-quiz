const quizForm = document.getElementById('quiz');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        budget: formData.get('budget'),
        environment: formData.get('environment')
    };

    const jsonAnswers = JSON.stringify(answers);
    window.localStorage.setItem('answers', jsonAnswers);
    window.location = 'result.html';
});