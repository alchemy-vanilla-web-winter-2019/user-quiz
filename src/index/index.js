const username = document.getElementById('username');

username.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submittedName = {
        username: username.name.value,
    };

    console.log(submittedName);
});