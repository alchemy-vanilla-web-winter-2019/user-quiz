const form = document.getElementById('profile-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    let userProfile = {
        name: formData.get('name'),
        avatar: formData.get('avatar')
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);
    window.location = './quiz.html';

});