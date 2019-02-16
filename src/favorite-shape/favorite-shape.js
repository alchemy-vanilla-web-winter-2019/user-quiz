function topColor(answer, scorecard) {
    if(answer === 'melancholic') {
        scorecard.melancholic += .4;
    }
    if(answer === 'euphoric') {
        scorecard.euphoric += .6;
    }
    if(answer === 'enraged') {
        scorecard.enraged += .3;
    }
}

export default topColor;