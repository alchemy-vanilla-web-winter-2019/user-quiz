const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userFormData = new FormData(userForm);

    const userProfile = {
        name: userFormData.get('user-name'),
        color: userFormData.get('color')
    };

    let userProfileString = JSON.stringify(userProfile);
    window.localStorage.setItem('userProfile', userProfileString);

    window.location = './quiz.html';
});