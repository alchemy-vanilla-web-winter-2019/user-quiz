function bandScore(band, scorecard) {
    if(band === 'led-zep') {
        scorecard.charmander += 1;
    }
    if(band === 'the-stones') {
        scorecard.bulbasaur += 1;
    }
    if(band === 'the-beatles') {
        scorecard.squirtle += 1;
    }
    return scorecard;
}
export default bandScore;