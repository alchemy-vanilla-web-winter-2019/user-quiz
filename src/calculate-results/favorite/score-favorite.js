function scoreFavorite(answer, scorecard) {
    if(answer === 'ocean') {
        scorecard.ocean += 1;
    } 
    if(answer === 'sun') {
        scorecard.sun += 1;
    } 
    if(answer === 'grass') {
        scorecard.grass += 1;
    } 
}

export default scoreFavorite;