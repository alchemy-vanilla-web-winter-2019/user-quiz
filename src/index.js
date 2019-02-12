
const fruitQuizNode = document.getElementById('fruit-quiz');


fruitQuizNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(fruitQuizNode);
    const color = formData.get('color');
    const animal = formData.get('animal');
    const movie = formData.get('movie');

    const answers = {
        color: color,
        animal: animal,
        movie: movie
    };
    
    const answersJSON = JSON.stringify(answers);
    window.localStorage.setItem('answers', answersJSON);
    window.location = '/pages/result.html';
});