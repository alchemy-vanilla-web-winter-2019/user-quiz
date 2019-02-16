function familyCheck(family, scorecard) {
    if(family === 'oppressive') {
        scorecard.femaleTrouble += 1;
        return scorecard;
    }
    if(family === 'supportive') {
        scorecard.hairspray += 1;
        return scorecard;
    }
    if(family === 'care-not') {
        scorecard.polyester += 1;
        return scorecard;
    }
}

export default familyCheck;