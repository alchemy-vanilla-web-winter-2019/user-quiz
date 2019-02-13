const wizardForm = document.getElementById('wizard-form');

wizardForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(wizardForm);
    
    const answers = {
        patronus: formData.get('patronus')
    };
    
});