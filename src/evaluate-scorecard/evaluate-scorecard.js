function evaluateScorecard(scorecard) {
    const colville = scorecard.colville;
    const mercer = scorecard.mercer;
    const perkins = scorecard.perkins;

    if(colville >= mercer && colville >= perkins) {
        return 'Matt Colville';
    }
    if(mercer > perkins) {
        return 'Matt Mercer';
    }
    
    return 'Chris Perkins';
}

export default evaluateScorecard;