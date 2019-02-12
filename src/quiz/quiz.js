const quizForm = document.getElementById('quiz-form');
// const morning = document.getElementById('morning');
// const midDay = document.getElementById('mid-day');
// const evening = document.getElementById('evening');
// const midnight = document.getElementById('midnight');

document.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    let choices = {
        time: formData.get('time')
    };

    console.log('choices', choices);
    
});


//I have the data. I now need to start my first test to evaluate time answer
