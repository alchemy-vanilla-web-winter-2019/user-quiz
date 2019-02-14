function scoreReligion(answer, scorecard) {
    if(answer === 'organized') {
        scorecard.marguerit += 1;
        scorecard.barbara += 0.5;
    }
    if(answer === 'personal') {
        scorecard.antuniet += 1;
        scorecard.barbara += 0.5;
    }
    if(answer === 'atheist') {
        scorecard.barbara += 0.5;
    }
}

export default scoreReligion;