const quizNode = document.getElementById('quiz');

quizNode.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(quizNode);
    const answers = {
        word: formData.get('self'),
        inspire: formData.get('motivation'),
        family: formData.get('environment'),
    }
    const json = JSON.stringify(answers);
    window.localStorage.setItem('answers', json);
    window.location = './result-page.html';
});
