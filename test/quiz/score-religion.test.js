import scoreReligion from '../../src/quiz/score-religion.js';

const test = QUnit.test;

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { antuniet: 0, barbara: 0, marguerit: 0 };
});

test('choosing organized increments marguerit by 1 and barbara by .5', function(assert) {
    scoreReligion('organized', scorecard);
    assert.deepEqual(scorecard, { antuniet: 0, barbara: 0.5, marguerit: 1 });
});

test('choosing personal increments antuniet by 1 and barbara by .5', function(assert) {
    scoreReligion('personal', scorecard);
    assert.deepEqual(scorecard, { antuniet: 1, barbara: 0.5, marguerit: 0 });
});

test('choosing atheist increments barbara by .5', function(assert) {
    scoreReligion('atheist', scorecard);
    assert.deepEqual(scorecard, { antuniet: 0, barbara: 0.5, marguerit: 0 });
});
