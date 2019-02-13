function checkDessert(dessert, scorecard) {
    if(dessert === 'crumble') {
        scorecard.blueberry += 2;
    }
    if(dessert === 'pie') {
        scorecard.apple += 2;
    }
    if(dessert === 'parfait') {
        scorecard.kiwi += 2;
    }
    if(dessert === 'pudding') {
        scorecard.banana += 2;
    }
    return scorecard;
}

export default checkDessert;