function rateScorecard(scorecard) {
    const femaleTrouble = scorecard.femaleTrouble;
    const polyester = scorecard.polyester;
    const hairspray = scorecard.hairspray;
    if(femaleTrouble > polyester && femaleTrouble > hairspray) {
        
        return 'female trouble';
    }

    if(polyester > femaleTrouble && polyester > hairspray) {
        return  'polyester';
    }

    if(hairspray > femaleTrouble && hairspray > polyester) {
        return 'hairspray';
    }

    
    
}

export default rateScorecard;