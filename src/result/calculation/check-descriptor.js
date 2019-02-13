function descriptorCheck(description, scorecard) {
    if(description === 'old') {
        scorecard.sophia += 1;
    }
    if(description === 'masculine') {
        scorecard.dorothy += 1;
    }
    if(description === 'dumb') {
        scorecard.rose += 1;
    }
    if(description === 'sexy') {
        scorecard.blanche += 1;
    }
    return scorecard;
}

export default descriptorCheck;