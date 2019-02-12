function foodScore(food, scorecard) {
    if(food === 'steak') {
        scorecard.charmander += 1;
    }
    if(food === 'salad') {
        scorecard.bulbasaur += 1;
    }
    if(food === 'sushi') {
        scorecard.squirtle += 1;
    }
    return scorecard;
}

export default foodScore;