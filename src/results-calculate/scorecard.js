function evaluateScoreCard(scorecard) {
    const leslie = scorecard.leslie;
    const jerry = scorecard.jerry;
    const ben = scorecard.ben;
    const ann = scorecard.ann;
    
    if(leslie > jerry 
        && leslie > ben
        && leslie > ann) {
        return 'leslie';
    }
    else if(jerry > leslie
        && jerry > ben
        && jerry > ann) {
        return 'jerry';
    }
    else if(ben > leslie
        && ben > jerry
        && ben > ann) {
        return 'ben';
    }
    else if(ann > leslie
        && ann > jerry
        && ann > ben) {
        return 'ann';
    }
    else {
        return 'april hates you';
    }
}
export default evaluateScoreCard;