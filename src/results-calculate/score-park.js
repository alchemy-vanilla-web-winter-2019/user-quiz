function scoreParkQuestion(parkAnswer, scorecard) {
    if(parkAnswer === 'waterpark') {
        scorecard.jerry += 2;
        scorecard.ann += 1;
    }
    else if(parkAnswer === 'amusement-park') {
        scorecard.leslie += 1;
        scorecard.jerry += 1;
        scorecard.ann += 2;
    }
    else if(parkAnswer === 'national-park') {
        scorecard.leslie += 4;
        scorecard.ben += 2;
    }
    else if(parkAnswer === 'city-park') {
        scorecard.leslie += 2;
        scorecard.ben += 3;
        scorecard.ann += 0.5;
    }
    else 'Go hang with Tom at the Glitter Factory';
}

export default scoreParkQuestion;