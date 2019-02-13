const quizForm = document.getElementById('quiz-form');

const jsonString = window.localStorage.getItem('username-object');
const username = JSON.parse(jsonString);

document.getElementById('usersname').innerHTML = username;

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        food: formData.get('food'),
    };
    window.location = 'results.html';
    console.log(answers);

});
