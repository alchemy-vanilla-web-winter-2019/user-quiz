function checkRelationship(relationship, scorecard) {
    if(relationship === 'married') {
        scorecard.banana += 1;
    }
    if(relationship === 'dating') {
        scorecard.apple += 1;
    }
    if(relationship === 'poly') {
        scorecard.kiwi += 1;
    }
    if(relationship === 'single') {
        scorecard.blueberry += 1;
    }
    return scorecard;
}

export default checkRelationship;