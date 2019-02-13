function checkFriday(friday, scorecard) {
    if(friday === 'lasagna') {
        scorecard.sophia += 1;
    }
    if(friday === 'cheesecake') {
        scorecard.dorothy += 1;
    }
    if(friday === 'lanai') {
        scorecard.rose += 1;
    }
    if(friday === 'date') {
        scorecard.blanche += 1;
    }
    return scorecard;
}

export default checkFriday;