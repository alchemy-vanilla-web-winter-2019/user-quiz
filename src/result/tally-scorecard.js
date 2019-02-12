function tallyScorecard(scorecard) {
  const wizard = scorecard.wizard;
  const fighter = scorecard.fighter;
  const archer = scorecard.archer;
    
  if(wizard > fighter && wizard > archer) {
    return 'wizard';
  }
  if(fighter > archer) {
    return 'fighter';
  } else {
    return 'archer';
  }
}
export default tallyScorecard;