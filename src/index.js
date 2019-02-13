const usernameForm = document.getElementById('username-form');
const username = document.getElementById('username');

usernameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameValue = username.value;
    window.localStorage.setItem('username', usernameValue);
    window.location = '../quiz.html';

});
