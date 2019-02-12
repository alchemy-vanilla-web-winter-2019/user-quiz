const userProfile = JSON.parse(window.localStorage.getItem('userProfile'));

const userNameDisplay = document.getElementById('user-name-display');
userNameDisplay.textContent = userProfile.name;

const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const quizFormData = new FormData(quizForm);

    const answers = {
        players: quizFormData.get('players')
    };

    console.log(answers);
});