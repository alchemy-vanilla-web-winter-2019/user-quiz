function checkLeisure(activity, scorecard) {
    if(activity === 'running') {
        scorecard.banana += 1;
    }
    if(activity === 'tv') {
        scorecard.blueberry += 1;
    }
    if(activity === 'knitting') {
        scorecard.apple += 1;
    }
    if(activity === 'partying') {
        scorecard.kiwi += 1;
    }

    return scorecard;
}

export default checkLeisure;