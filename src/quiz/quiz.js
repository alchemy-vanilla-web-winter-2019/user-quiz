import surveyResults from '../results/results.js';

const form = document.getElementById('quiz-form');

form.addEventListener('submit', function() {
    event.preventDefault();

    const formData = new FormData(form);

    const answers = {
        song: formData.get('song'),
        artist: formData.get('artist')
    };

    const stringified = JSON.stringify(answers);
    window.localStorage.setItem('answers', stringified);

    const result = surveyResults(answers);
    console.log(result);
    const resultURL = 'results.html?result=' + encodeURIComponent(result);
    console.log(resultURL);

    window.location = '../../results.html';

});