import rateScorecard from '../../src/quiz/rate-scorecard.js';

const test = QUnit.test;

test('returns Antuniet when that is the greatest value', function(assert) {
    const scorecard = { antuniet: 1, barbara: 0, marguerit: 0 };
    assert.equal('antuniet', rateScorecard(scorecard));
});

test('returns Barbara when that is the greatest value', function(assert) {
    const scorecard = { antuniet: 0, barbara: 1, marguerit: 0 };
    assert.equal('barbara', rateScorecard(scorecard));
});
test('returns Marguerit when that is the greatest value', function(assert) {
    const scorecard = { antuniet: 0, barbara: 0, marguerit: 1 };
    assert.equal('marguerit', rateScorecard(scorecard));
});
