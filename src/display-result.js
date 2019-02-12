const quizResult = document.getElementById('quiz-result');

const searchParams = new URLSearchParams(window.location.search);
const result = searchParams.get('result');

quizResult.textContent = result;