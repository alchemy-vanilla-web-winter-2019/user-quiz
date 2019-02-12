const userProfileString = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(userProfileString);

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;

const quizResultString = window.localStorage.getItem('quizResult');
const quizResult = JSON.parse(quizResultString);

const resultSpan = document.getElementById('result');
resultSpan.textContent = quizResult;