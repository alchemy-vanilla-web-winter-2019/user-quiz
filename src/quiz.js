const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);

    const response = {
        q1: formData.get('q1'),  
        q2: formData.get('q2'),  
    };

    console.log(response);
    
    const json = JSON.stringify(response);
    window.localStorage.setItem('responses', json);

    //window.location = 'results.html';

});