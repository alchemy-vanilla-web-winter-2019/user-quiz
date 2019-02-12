const indexFormEl = document.getElementById('index-form');


indexFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formDada = new FormData(indexFormEl);
    const profileObj = {
        name: formDada.get('name')
    };
    
    const profileJson = JSON.stringify(profileObj);
    window.localStorage.setItem('profile', profileJson);
    
    window.location = 'quiz.html';
});