function familyCheck(inspire, scorecard) {
    if(inspire === 'oppressive') {
        scorecard.femaleTrouble += 1;
        return scorecard;
    }
    if(inspire === 'supportive') {
        scorecard.hairspray += 1;
        return scorecard;
    }
    if(inspire === 'care-not') {
        scorecard.polyester += 1;
        return scorecard;
    }


}

export default familyCheck;