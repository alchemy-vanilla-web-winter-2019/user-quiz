import calculateHowActive from './how-active.js';
import calculateDreamJob from './calc-dreamjob.js';

const quizForm = document.getElementById('quiz-form');
const howActive = document.getElementById('how-active');
const impactOrMoney = document.getElementById('impact-or-money');
const displayResults = document.getElementById('display-results');


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm); //for hangoutWith


    const quizAnswers = {
        active: howActive.value,
        hangoutWith: formData.get('hangout-with'),
        impactMoney: impactOrMoney.value
    };

    const usersScores = {
        researcher: 0,
        professionalAthlete: 0
    };

    calculateHowActive(quizAnswers.active, usersScores); //now usersScores has updated scores
    const dreamJobResults = calculateDreamJob(usersScores);
    displayResults.textContent = dreamJobResults;


    

    //window.location = new page
});