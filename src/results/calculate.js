function finalizeScorecard(scorecard){
    if(scorecard.bluegrass > scorecard.pop && scorecard.bluegrass > scorecard.hiphop){     
        return 'bluegrass';
    }
    if(scorecard.pop > scorecard.bluegrass && scorecard.pop > scorecard.hiphop) {
        return 'pop';
    }
    if(scorecard.hiphop > scorecard.bluegrass && scorecard.hiphop > scorecard.pop) {
        return 'hiphop';
    }
    
}

export default finalizeScorecard;