function scoreLoot(answer, scorecard) {
  if(answer === 'treasure') {
    scorecard.fighter += 1;
    scorecard.archer += 2;
  }
  if(answer === 'magic-item') {
    scorecard.wizard += 2;
    scorecard.archer += 1;
  }
  if(answer === 'weapon') {
    scorecard.fighter += 2;
    scorecard.archer += 1;
  }
}
 
export default scoreLoot;