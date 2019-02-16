function topScore(answer, scorecard) {
    if(answer === 'melancholic') {
        scorecard.melancholic += 1;
    }
    if(answer === 'euphoric') {
        scorecard.euphoric += 1;
    }
    if(answer === 'enraged') {
        scorecard.enraged += 1;
    }
}

export default topScore;
