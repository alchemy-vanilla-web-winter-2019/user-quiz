function tally(scorecard) {
    if(scorecard.yes >= scorecard.no && scorecard.yes >= scorecard.eh) {
        return 'yes';
    }
    if(scorecard.no > scorecard.yes && scorecard.no >= scorecard.eh) {
        return 'no';
    }
    if(scorecard.eh > scorecard.yes && scorecard.eh > scorecard.no) {
        return 'eh';
    }
}

export default tally;