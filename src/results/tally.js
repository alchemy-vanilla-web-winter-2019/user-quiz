function tally(scorecard) {
    if(scorecard.melancholic > scorecard.euphoric && scorecard.melancholic > scorecard.enraged) {
        return 'purple';
    }
    if(scorecard.euphoric > scorecard.melancholic && scorecard.euphoric > scorecard.enraged) {
        return 'green';
    }
    if(scorecard.enraged > scorecard.euphoric && scorecard.enraged > scorecard.melancholic) {
        return 'red';
    }
}   

export default tally;