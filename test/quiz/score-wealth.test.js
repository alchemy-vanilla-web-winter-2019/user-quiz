import scoreWealth from '../../src/quiz/score-wealth.js';

const test = QUnit.test;

let scorecard = null;

QUnit.testStart( function() {
    scorecard = { antuniet: 0, barbara: 0, marguerit: 0 };
});

test('choosing money increments marguerit', function(assert) {
    scoreWealth('money', scorecard);
    assert.deepEqual(scorecard, { antuniet: 0, barbara: 0, marguerit: 1 });
});

