const jsonString = window.localStorage.getItem('username-object');
const username = JSON.parse(jsonString);

document.getElementById('usersname').innerHTML = username;



