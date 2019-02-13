function foodScore(answer, scorecard) {
    if(answer === 'pizza') {
        scorecard.germanshepard += 1;
    }   
    if(answer === 'cake') {
        scorecard.pug += 1;
    }
    if(answer === 'salad') {
        scorecard.labradoodle += 1;
    }   
}

export default foodScore;