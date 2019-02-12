import tallyScorecard from '../../src/result/tally-scorecard.js';
const test = QUnit.test;

QUnit.module('testing scorecard results');

test('returns Wizard if greatest value', function(assert) {
  const scorecard = { wizard: 1, fighter: 0, archer: 0 };
  const result = tallyScorecard(scorecard);
  assert.equal(result, 'wizard');
});

test('returns Fighter if greatest value', function(assert) {
  const scorecard = { wizard: 0, fighter: 1, archer: 0 };
  const result = tallyScorecard(scorecard);
  assert.equal(result, 'fighter');
});

test('returns archer if greatest value', function(assert) {
  const scorecard = { wizard: 0, fighter: 0, archer: 1 };
  const result = tallyScorecard(scorecard);
  assert.equal(result, 'archer');
});