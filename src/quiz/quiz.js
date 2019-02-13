// import timeScoreCrunch from '../time-score-crunch/time-score-crunch';

const quizForm = document.getElementById('quiz-form');

// const morning = document.getElementById('morning');
// const midDay = document.getElementById('mid-day');
// const evening = document.getElementById('evening');
// const midnight = document.getElementById('midnight');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    let choices = {
        time: formData.get('time')
    };
    
    
    //below not here. timeScoreCrunch is just collecting the data; need to put in local storage
    // timeScoreCrunch(choices.time, scorecard);
    console.log('choices', choices);
    
});


//I have the data. I now need to start my first test to evaluate time answer
