function scoreSocialism(socialism, scorecard) {
    if(socialism === 'socialism') {
        scorecard.yes += 1;
        scorecard.eh += 1;
    }
    if(socialism === 'monarchy') {
        scorecard.yes += 1;
    }
    if(socialism === 'capitalism') {
        scorecard.no += 1;
    }
}

export default scoreSocialism;