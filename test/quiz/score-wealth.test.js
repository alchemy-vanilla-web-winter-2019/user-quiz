import scoreWealth from '../../src/quiz/score-wealth.js';

const test = QUnit.test;

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { antuniet: 0, barbara: 0, marguerit: 0 };
});

test('choosing money increments marguerit', function(assert) {
    scoreWealth('money', scorecard);
    assert.deepEqual(scorecard, { antuniet: 0, barbara: 0, marguerit: 1 });
});

test('choosing land increments barbara', function(assert) {
    scoreWealth('land', scorecard);
    assert.deepEqual(scorecard, { antuniet: 0, barbara: 1, marguerit: 0 });
});

test('choosing jewelry increments antuniet', function(assert) {
    scoreWealth('jewelry', scorecard);
    assert.deepEqual(scorecard, { antuniet: 1, barbara: 0, marguerit: 0 });
});