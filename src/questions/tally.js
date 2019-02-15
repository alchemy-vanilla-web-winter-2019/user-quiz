function tally(scorecard) {
    if(scorecard.soma >= scorecard.akira && scorecard.soma >= scorecard.ikumi) {
        return 'soma';
    } else if(scorecard.akira >= scorecard.ikumi && scorecard.akira > scorecard.soma) {
        return 'akira';
    } else if(scorecard.ikumi > scorecard.soma && scorecard.ikumi > scorecard.akira) {
        return 'ikumi';
    }
}

export default tally;