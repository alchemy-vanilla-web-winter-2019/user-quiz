import scoreLoot from '../../src/question/score-loot.js';
const test = QUnit.test;

QUnit.module('testing loot preference');

let scorecard = null;
QUnit.testStart(function() {
  scorecard = { wizard: 0, fighter: 0, archer: 0 };
});

test('if treasure +2 to archer +1 to fighter', function(assert) {
  scoreLoot('treasure', scorecard);
  assert.deepEqual(scorecard, { wizard: 0, fighter: 1, archer: 2 });
});

test('if magic item +2 to wizard +1 to archer', function(assert) {
  scoreLoot('magic-item', scorecard);
  assert.deepEqual(scorecard, { wizard: 2, fighter: 0, archer: 1 });
});

test('if weapon +2 to fighter +1 to archer', function(assert) {
  scoreLoot('weapon', scorecard);
  assert.deepEqual(scorecard, { wizard: 0, fighter: 2, archer: 1 });
});