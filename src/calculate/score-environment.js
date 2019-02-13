function scoreEnvironment(environment, scorecard) {
    if(environment === 'mountains') {
        scorecard.timberline += 1;
        scorecard.cabin += 1;
    }
    else if(environment === 'beach') {
        scorecard.hawaii += 1;
        scorecard.thailand += 1;
    }
    else if(environment === 'city') {
        scorecard.nyc += 1;
        scorecard.hanoi += 1;
    }
}

export default scoreEnvironment;