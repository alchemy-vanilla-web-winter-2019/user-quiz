const formNode = document.getElementById('quiz');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formNode);

    const answers = {
        season: formData.get('season'),
        descriptor: formData.get('descriptor'),
        friday: formData.get('friday')
    };

    const json = JSON.stringify(answers);

    window.localStorage.setItem('answers', json);

    window.location = '../pages/results.html';

});