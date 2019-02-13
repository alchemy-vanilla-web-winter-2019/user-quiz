const userProfileString = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(userProfileString);

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;

const resultSpan = document.getElementById('result');
resultSpan.textContent = userProfile.result;