
const fruitQuizNode = document.getElementById('fruit-quiz');


fruitQuizNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(fruitQuizNode);
    const color = formData.get('color');
    const animal = formData.get('animal');
    const movie = formData.get('movie');
    const leisure = formData.get('activity');
    const vacation = formData.get('vacation');
    const transportation = formData.get('transportation');
    const curse = formData.get('curse');
    const dessert = formData.get('dessert');
    const relationship = formData.get('relationship');
    const lobster = formData.get('lobster');

    const answers = {
        color: color,
        animal: animal,
        movie: movie,
        leisure: leisure,
        vacation: vacation,
        transportation: transportation,
        curse: curse,
        dessert: dessert,
        relationship: relationship,
        lobster: lobster
    };
    
    const answersJSON = JSON.stringify(answers);
    window.localStorage.setItem('answers', answersJSON);
    window.location = '/pages/result.html';
});