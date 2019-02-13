const final = window.localStorage.getItem('finalanswer');
const result = JSON.parse(final);

const display = document.getElementById('final-result');
display.textContent = result;

console.log(result);
