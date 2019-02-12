function scoreActivity(answer, scorecard) {
    if(answer === 'ocean') {
        scorecard.ocean += .5;
    } 
    if(answer === 'sun') {
        scorecard.sun += .5;
    } 
    if(answer === 'grass') {
        scorecard.grass += .5;
    } 
}
export default scoreActivity;

