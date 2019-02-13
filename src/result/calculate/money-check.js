function moneyCheck(money, scorecard) {
    if(money === 'owner') {
        scorecard.gryffindor += 1;
    }
    if(money === 'take') {
        scorecard.slytherin += 1;
    }
    if(money === 'leave') {
        scorecard.ravenclaw += 1;
    }
    if(money === 'donate') {
        scorecard.hufflepuff += 1;
    }
    return scorecard;
}

export default moneyCheck;