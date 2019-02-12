const personalInfoForm = document.getElementById('personal-info');

personalInfoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(personalInfoForm);
    
    const personalInfo = {
        name: formData.get('name'),
        ssn: formData.get('ssn')
    };
    
    const infoString = JSON.stringify(personalInfo);
    window.localStorage.setItem('personalInfo', infoString);
    
    window.location = 'quiz.html'
});