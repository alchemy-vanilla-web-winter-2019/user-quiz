const characterEl = document.getElementById('character');
const nameEl = document.getElementById('name');
const ssnEl = document.getElementById('ssn');

const searchParams = new URLSearchParams(window.location.search);
const character = searchParams.get('character');
characterEl.textContent = character;

const infoString = window.localStorage.getItem('personalInfo');
const personalInfo = JSON.parse(infoString);

nameEl.textContent = personalInfo.name;
ssnEl.textContent = 'SSN: ' + personalInfo.ssn;