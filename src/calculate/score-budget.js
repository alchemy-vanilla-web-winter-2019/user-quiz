function scoreBudget(budget, scorecard) {
    if(budget === 'expensive') {
        scorecard.timberline += 1;
        scorecard.hawaii += 1;
        scorecard.nyc += 1;
    }
    else if(budget === 'cheap') {
        scorecard.cabin += 1;
        scorecard.hanoi += 1;
        scorecard.thailand += 1;
    }
}

export default scoreBudget;