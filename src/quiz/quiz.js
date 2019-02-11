const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);

    const answers = {
        favorite: formData.get('favorite') 
    };

    console.log(answers);
    
    // const json = JSON.stringify(answers);
    // window.localStorage.setItem('responses', json);

    //window.location = 'results.html';

});