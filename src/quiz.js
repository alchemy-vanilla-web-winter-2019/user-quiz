const userProfile = JSON.parse(window.localStorage.getItem('userProfile'));

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;

