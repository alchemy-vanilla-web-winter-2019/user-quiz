function wordCheck(word, scorecard) {
    if(word === 'rebellious') {
        scorecard.femaleTrouble += 1;
    }
    if(word === 'activist') {
        scorecard.hairspray += 1;
    }
    if(word === 'friendly') {
        scorecard.polyester += 1;
    }
    return scorecard;
}

export default wordCheck;