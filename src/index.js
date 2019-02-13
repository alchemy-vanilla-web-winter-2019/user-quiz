const foodWarForm = document.getElementById('food-war-form');

foodWarForm.addEventListener('submit', function(event) {
    event.preventDefault();
   
    const formAnime = new FormData(foodWarForm);

    const userfoodWar = {
        name: formAnime.get('name'),
        avatar: formAnime.get('avatar')
    };

    const json = JSON.stringify(userfoodWar);
    window.localStorage.setItem('userfoodWar', json);
    window.location = './quiz.html';
});