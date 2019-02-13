import surveyResults from '../results/results.js';

const form = document.getElementById('quiz-form');
const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);
const userProfileName = document.getElementById('user-profile-name');
const userProfileImage = document.getElementById('user-profile-image');
userProfileName.textContent = userProfile.name;
userProfileImage.src = './assets/' + userProfile.avatar + '.png';

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
    
    const json = JSON.stringify(result);
    window.localStorage.setItem('finalanswer', json);

    window.location = '../../results.html';
});