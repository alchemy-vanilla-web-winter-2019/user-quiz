function rateScorecard(scorecard) {
    const charmander = scorecard.charmander;
    const bulbasaur = scorecard.bulbasaur;
    const squirtle = scorecard.squirtle;
    if(charmander > bulbasaur && charmander > squirtle) {
        return 'Charmander';
    }
    if(bulbasaur > charmander && bulbasaur > squirtle) {
        return 'Bulbasaur';
    }
    if(squirtle > charmander && squirtle > bulbasaur) {
        return 'Squirtle';
    }
    return 'Pikachu';
}
export default rateScorecard;