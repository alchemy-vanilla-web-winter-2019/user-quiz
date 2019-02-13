const quizNode = document.getElementById('quiz');

quizNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizNode);
    const answers = {
        word: formData.get('word'),
        color: formData.get('color'),
        money: formData.get('money'),
        animal: formData.get('animal'),
        help: formData.get('help')
    };
    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);
    window.location = '../result.html';
});