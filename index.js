const formNode = document.getElementById('welcome');
const inputNode = document.getElementById('name');


formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        name: inputNode.value
    };
    
    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);

    window.location = './quiz.html';
});