const formNode = document.getElementById('poke-quiz');

// const submitButtonNode = document.getElementById('submit');
formNode.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log('itworked');
    const formdata = new FormData(formNode);
    const answers = {
        color: formdata.get('fav-color'),
        band: formdata.get('fav-band'),
        food: formdata.get('fav-meal'),
        janken: formdata.get('janken')
    };
    const json = JSON.stringify(answers);
    window.localStorage.setItem('pokequiz', json);
    window.location = './results.html';
});
