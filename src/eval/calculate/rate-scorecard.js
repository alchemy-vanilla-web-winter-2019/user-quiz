function rateScorecard(scorecard) {
    const apple = scorecard.apple;
    const banana = scorecard.banana;
    const kiwi = scorecard.kiwi;
    const blueberry = scorecard.blueberry;
    if(apple > banana && apple > kiwi && apple > blueberry) {
        return 'apple';
    }
    if(banana > apple && banana > kiwi && banana > blueberry) {
        return 'banana';
    }
    if(kiwi > banana && kiwi > apple && kiwi > blueberry) {
        return 'kiwi';
    }
    if(blueberry > banana && blueberry > kiwi && blueberry > apple) {
        return 'blueberry';
    }
    else {
        return 'vegetable';
    }
}

export default rateScorecard;