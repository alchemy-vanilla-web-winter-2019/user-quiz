function scoreAllergic(allergic, scorecard) {
    if(allergic === 'yes') {
        scorecard.yes += 1;
    }
    if(allergic === 'no') {
        scorecard.no += 1;
    }
    if(allergic === 'unsure') {
        scorecard.eh += 1;
    }
}

export default scoreAllergic;