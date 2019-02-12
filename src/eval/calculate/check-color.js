function checkColor(color, scorecard) {
    if(color === 'red') {
        scorecard.apple += 1;
    }
    if(color === 'yellow') {
        scorecard.banana += 1;
    }
    if(color === 'green') {
        scorecard.kiwi += 1;
    }
    if(color === 'blue') {
        scorecard.blueberry += 1;
    }
    return scorecard;
}

export default checkColor;