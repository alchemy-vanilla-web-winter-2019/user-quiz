function checkCurse(curse, scorecard) {
    if(curse === 'f') {
        scorecard.kiwi += 1;
    }
    if(curse === 's') {
        scorecard.blueberry += 1;
    }
    if(curse === 'b') {
        scorecard.banana += 1;
    }
    if(curse === 'a') {
        scorecard.apple += 1;
    }
    return scorecard;
}

export default checkCurse;