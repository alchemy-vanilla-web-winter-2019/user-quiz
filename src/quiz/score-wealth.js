function scoreWealth(answer, scorecard) {
    if(answer === 'money') {
        scorecard.marguerit += 1;
    }
    if(answer === 'land') {
        scorecard.barbara += 1;
    }
    if(answer === 'jewelry') {
        scorecard.antuniet += 1;
    }
}

export default scoreWealth;