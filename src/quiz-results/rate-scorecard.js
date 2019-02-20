function rateScorecard(scorecard) {
    //defines scorecard as the object.
    const germanshepard = scorecard.germanshepard;
    const pug = scorecard.pug;
    const labradoodle = scorecard.labradoodle; 

    if(germanshepard > pug && germanshepard > labradoodle) {
        return 'German Shepard';
    }
    if(germanshepard < pug && pug > labradoodle) {
        return 'Pug';
    }
    if(labradoodle > pug && germanshepard < labradoodle) {
        return 'Labradoodle';
    } console.log('SCORE', rateScorecard);
}

export default rateScorecard;