function wordCheck(word, scorecard) {
    if(word === 'loyal') {
        scorecard.gryffindor += 1;
    }
    if(word === 'cunning') {
        scorecard.slytherin += 1;
    }
    if(word === 'intelligent') {
        scorecard.ravenclaw += 1;
    }
    if(word === 'determined') {
        scorecard.hufflepuff += 1;
    }
    return scorecard;
}

export default wordCheck;