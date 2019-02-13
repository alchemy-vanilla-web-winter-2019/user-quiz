function helpCheck(help, scorecard) {
    if(help === 'right') {
        scorecard.gryffindor += 1;
    }
    if(help === 'ignore') {
        scorecard.slytherin += 1;
    }
    if(help === 'quick') {
        scorecard.ravenclaw += 1;
    }
    if(help === 'stop') {
        scorecard.hufflepuff += 1;
    }
    return scorecard;
}

export default helpCheck;