function tally(scorecard) {
    if(scorecard.sun > scorecard.ocean && scorecard.sun > scorecard.grass) {
        return 'yellow';
    } else if(scorecard.ocean > scorecard.grass && scorecard.ocean > scorecard.sun) {
        return 'blue';
    } else if(scorecard.grass > scorecard.ocean && scorecard.grass > scorecard.sun) {
        return 'green';
    }
}

export default tally;