import pullPlayer from './pull-player.js';
const quizResult = document.getElementById('quiz-result');
pullPlayer();
const searchParams = new URLSearchParams(window.location.search);
const result = searchParams.get('result');

quizResult.textContent = result;