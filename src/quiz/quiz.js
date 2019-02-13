import scoreFood from '../questions/score-food.js';
const quizForm = document.getElementById('quiz-form');

// Display user name and avatar
const json = window.localStorage.getItem('userfoodWar');
const userfoodWar = JSON.parse(json);
const userFoodWarDisplay = document.getElementById('user-food-war-display');
const userFoodWarImage = document.getElementById('user-food-war-image');
userFoodWarDisplay.textContent = userfoodWar.name;
userFoodWarImage.src = './assets/' + userfoodWar.avatar + '.jpeg';


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formAnime = new FormData(quizForm);
    const answers = {
        food: formAnime.get('food')
    };
    const scorecard = {
        soma: 0,
        ikumi: 0,
        akira: 0
    };
    scoreFood(answers.food, scorecard);

    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);

    window.location = './results.html';
});