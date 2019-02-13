function checkTransportation(transporation, scorecard) {
    if(transporation === 'bike') {
        scorecard.banana += 1;
    }
    if(transporation === 'car') {
        scorecard.apple += 1;
    }
    if(transporation === 'bus') {
        scorecard.blueberry += 1;
    }
    if(transporation === 'plane') {
        scorecard.kiwi += 1;
    }
    return scorecard;
}

export default checkTransportation;