function jankenScore(janken, scorecard) {
    if(janken === 'scissors') {
        scorecard.charmander += 1;
    }
    if(janken === 'paper') {
        scorecard.bulbasaur += 1;
    }
    if(janken === 'rock') {
        scorecard.squirtle += 1;
    }
    return scorecard;
}
export default jankenScore;