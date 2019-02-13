function colorScore(color, scorecard) {
    if(color === 'red') {
        scorecard.charmander += 1;
    }
    if(color === 'green') {
        scorecard.bulbasaur += 1;
    }
    if(color === 'blue') {
        scorecard.squirtle += 1;
    }
    return scorecard;
}
export default colorScore;