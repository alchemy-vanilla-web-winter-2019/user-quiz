import finalResult from '../final-results-page/final-results-page.js';

const quizForm = document.getElementById('quiz-form');

// const jsonString = window.localStorage.getItem('username-object');
// const username = JSON.parse(jsonString);  <----same as below---->
const username = JSON.parse(window.localStorage.getItem('username-object'));

document.getElementById('usersname').innerHTML = username;

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const answers = {
        food: formData.get('food'),
    };

    const quizEndResult = finalResult(answers);
    username.result = quizEndResult;

    const youAreString = JSON.stringify(username);
    window.localStorage.setItem('endResultObject', youAreString);

    // window.location = 'final-results.html';
    console.log(answers);

});
