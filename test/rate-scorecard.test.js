const test = QUnit.test;
import rateScorecard from '../src/result/calculation/rate-scorecard.js';

test('if sophia total is highest, return "Sophia"', function(assert) {
    const scorecard = { sophia: 2, dorothy: 0, rose: 1, blanche: 0 };
    const expected = "Sophia";
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});
test('if dorothy total is highest, return "Dorothy"', function(assert) {
    const scorecard = { sophia: 1, dorothy: 2, rose: 1, blanche: 0 };
    const expected = "Dorothy";
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});
test('if rose total is highest, return "Rose"', function(assert) {
    const scorecard = { sophia: 0, dorothy: 0, rose: 1, blanche: 0 };
    const expected = "Rose";
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});
test('if blanche total is highest, return "Blanche"', function(assert) {
    const scorecard = { sophia: 1, dorothy: 0, rose: 1, blanche: 2 };
    const expected = "Blanche";
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});