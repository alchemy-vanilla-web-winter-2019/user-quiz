const userInfo = document.getElementById('user-info');

userInfo.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userInfo);

    const userProfile = {
        name: formData.get('name')
    };

    const json = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', json);

    window.location = '/quiz.html';

});

