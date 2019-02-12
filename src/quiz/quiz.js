const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);
    
    const personalInfo = {
        wealth: formData.get('wealth'),
    };
    console.log(personalInfo); 
});