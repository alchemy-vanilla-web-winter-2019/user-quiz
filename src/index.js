const userProfile = document.getElementById('user-profile');

userProfile.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userProfile);

    const user = {
        name: formData.get('name'),
        avatar: formData.get('avatar')
    };

    const json = JSON.stringify(user);
    window.localStorage.setItem('profile', json);
    window.location = './quiz.html';
});