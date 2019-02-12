const nameForm = document.getElementById('name-form');
const userName = document.getElementById('name');


nameForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const userInfo = {
        name: userName.value
    };
    const serialize = JSON.stringify(userInfo);

    window.localStorage.setItem('userInfo', serialize);

    window.location = 'quiz.html';

});