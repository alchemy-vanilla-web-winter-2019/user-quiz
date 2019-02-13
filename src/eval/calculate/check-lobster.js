function checkLobster(lobster, scorecard) {
    if(lobster === 'lovers') {
        scorecard.blueberry += 1;
    }
    if(lobster === 'surf') {
        scorecard.kiwi += 1;
    }
    if(lobster === 'paradise') {
        scorecard.banana += 1;
    }
    if(lobster === 'roll') {
        scorecard.apple += 1;
    }
    return scorecard;
}

export default checkLobster;