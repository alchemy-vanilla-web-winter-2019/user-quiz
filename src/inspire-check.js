function inspireCheck(inspire, scorecard) {
    if(inspire === 'fame') {
        scorecard.femaleTrouble += 1;
        return scorecard;
    }
    if(inspire === 'dancing') {
        scorecard.hairspray += 1;
        return scorecard;
    }
    if(inspire === 'harmony') {
        scorecard.polyester += 1;
        return scorecard;
    }


}

export default inspireCheck;