function moneyCheck(word, scorecard) {
    if(word === 'owner') {
        scorecard.gryffindor += 1;
    }
    if(word === 'take') {
        scorecard.slytherin += 1;
    }
    if(word === 'leave') {
        scorecard.ravenclaw += 1;
    }
    if(word === 'donate') {
        scorecard.hufflepuff += 1;
    }
    return scorecard;
}

export default moneyCheck;