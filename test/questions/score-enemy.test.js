import scoreEnemy from '../../src/question/score-enemy.js';
const test = QUnit.test;

QUnit.module('test scoring for enemy question');
let scorecard = null;
QUnit.testStart(function() {
  scorecard = { wizard: 0, fighter: 0, archer: 0 };
});


test('if Wraith chosen, fighter+1', function(assert) {
  scoreEnemy('wraith', scorecard);
  assert.deepEqual(scorecard, { wizard: 0, fighter: 1, archer: 0 });
});

test('if Swarm chosen, archer+1', function(assert) {
  scoreEnemy('swarm', scorecard);
  assert.deepEqual(scorecard, { wizard: 0, fighter: 0, archer: 1 });
});

test('if child chosen, wizard+1', function(assert) {
  scoreEnemy('child', scorecard);
  assert.deepEqual(scorecard, { wizard: 1, fighter: 0, archer: 0 });
});