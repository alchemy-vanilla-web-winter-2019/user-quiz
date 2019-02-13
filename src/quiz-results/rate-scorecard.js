function rateScorecard(banana) {
    //defines banana as the object.
    const germanshepard = banana.germanshepard;
    const pug = banana.pug;
    const labradoodle = banana.labradoodle; 

    if(germanshepard > pug && germanshepard > labradoodle) {
        return 'German Shepard';
    }
    if(germanshepard < pug && pug > labradoodle) {
        return 'Pug';
    }
    if(labradoodle > pug && germanshepard < labradoodle) {
        return 'Labradoodle';
    }
}

export default rateScorecard;