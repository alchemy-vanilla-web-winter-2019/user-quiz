const username = document.getElementById('username');

username.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submittedName = {
        name: username.name.value,
    };

    localStorage.setItem('username-object', JSON.stringify(username.name.value));
    window.location = 'quiz.html';
    console.log(submittedName);
});