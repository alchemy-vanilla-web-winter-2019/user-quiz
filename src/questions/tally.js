function tally(scorecard) {
    if(scorecard.soma >= scorecard.akira && scorecard.soma >= scorecard.ikumi) {
        return 'soma';
    } 
    if(scorecard.akira >= scorecard.ikumi && scorecard.akira > scorecard.soma) {
        return 'akira';
    }
    if(scorecard.ikumi > scorecard.soma && scorecard.ikumi > scorecard.akira) {
        return 'ikumi';
    }
}

export default tally;