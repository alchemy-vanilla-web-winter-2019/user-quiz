function rateScorecard(scorecard) {
    const gryffindor = scorecard.gryffindor;
    const slytherin = scorecard.slytherin;
    const ravenclaw = scorecard.ravenclaw;
    const hufflepuff = scorecard.hufflepuff;

    if(gryffindor > slytherin && gryffindor > ravenclaw && gryffindor > hufflepuff) {
        return 'Gryffindor';
    }
    if(slytherin > gryffindor && slytherin > ravenclaw && slytherin > hufflepuff) {
        return 'Slytherin';
    }
    if(ravenclaw > gryffindor && ravenclaw > slytherin && ravenclaw > hufflepuff) {
        return 'Ravenclaw';
    }
    if(hufflepuff > gryffindor && hufflepuff > slytherin && hufflepuff > ravenclaw) {
        return 'Hufflepuff';
    }
    else {
        return 'Muggle';
    }
}

export default rateScorecard;