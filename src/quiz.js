const userName = document.getElementById('name');
const jsonString = window.localStorage.getItem('userInfo');
const userInfo = JSON.parse(jsonString);
userName.textContent = userInfo.name;


const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const formData = new FormData(quizForm);
    
    const answers = {
        poison: formData.get('poison')
    };
    console.log(answers);




});