function checkVacation(vacation, scorecard) {
    if(vacation === 'outback') {
        scorecard.kiwi += 1;
    }
    if(vacation === 'europe') {
        scorecard.apple += 1;
    }
    if(vacation === 'bahamas') {
        scorecard.banana += 1;
    }
    if(vacation === 'africa') {
        scorecard.blueberry += 1;
    }
    return scorecard;
}

export default checkVacation;