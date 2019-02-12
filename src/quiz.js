const userName = document.getElementById('name');
const jsonString = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonString);
userName.textContent = userInfo.name;

