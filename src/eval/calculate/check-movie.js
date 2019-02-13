function checkMovie(movie, scorecard) {
    if(movie === 'exorcist') {
        scorecard.blueberry += 1;
    }
    if(movie === 'nightmare') {
        scorecard.banana += 1;
    }
    if(movie === 'psycho') {
        scorecard.kiwi += 1;
    }
    if(movie === 'saw') {
        scorecard.apple += 1;
    }
    return scorecard;
}

export default checkMovie;