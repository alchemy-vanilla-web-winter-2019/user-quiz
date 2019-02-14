function scoreEnemy(answer, scorecard) {
  if(answer === 'wraith') {
    scorecard.fighter += 1;
  }
  if(answer === 'swarm') {
    scorecard.archer += 1;
  }
  if(answer === 'child') {
    scorecard.wizard += 1;
  }
}
export default scoreEnemy;