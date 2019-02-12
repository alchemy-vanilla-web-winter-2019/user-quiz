// const signIn = document.getElementById('sign-in');
const userNameInput = document.getElementById('user-name');

document.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = userNameInput.value;

    const jsonUser = JSON.stringify(userName);
    window.localStorage.setItem('userName', jsonUser);

    window.location = 'quiz.html';
});