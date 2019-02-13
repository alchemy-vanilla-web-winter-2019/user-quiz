function rateScorecard(scorecard) {
    const sophia = scorecard.sophia;
    const dorothy = scorecard.dorothy;
    const rose = scorecard.rose;
    const blanche = scorecard.blanche;

    if(sophia > dorothy && sophia > rose && sophia > blanche) {
        return 'Sophia';
    }
    if(dorothy > sophia && dorothy > rose && dorothy > blanche) {
        return 'Dorothy';
    }
    if(rose > sophia && rose > dorothy && rose > blanche) {
        return 'Rose';
    }
    if(blanche > sophia && blanche > dorothy && blanche > rose) {
        return 'Blanche';
    }
    else {
        return 'Stanley';
    }
}

export default rateScorecard;