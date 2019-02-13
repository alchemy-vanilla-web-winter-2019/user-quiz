const userProfileString = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(userProfileString);

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;
userNameDisplay.classList.add(userProfile.color);

const resultSpan = document.getElementById('result');
resultSpan.textContent = userProfile.result;