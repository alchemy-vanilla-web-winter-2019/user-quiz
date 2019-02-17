function rateScorecard(scorecard) {
    const femaleTrouble = scorecard.femaleTrouble;
    const polyester = scorecard.polyester;
    const hairspray = scorecard.hairspray;
    
   
    if(femaleTrouble > polyester && femaleTrouble > hairspray) {
        
        return ' Female Trouble';
    }

    if(polyester > femaleTrouble && polyester > hairspray) {
        return  ' Polyester';
    }

    if(hairspray > femaleTrouble && hairspray > polyester) {
        return ' Hairspray';
    }

    
    
}
export default rateScorecard;