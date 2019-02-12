const signIn = document.getElementById('sign-in');
const userNameInput = document.getElementById('user-name');

document.addEventListener('submit', function() {
    userName = userNameInput.value;

    jsonUser = JSON.stringify(userName);
    window.localStorage.setItem('userName', jsonUser);

    //username is in local storage. Now I need to redirect to the quiz page
});