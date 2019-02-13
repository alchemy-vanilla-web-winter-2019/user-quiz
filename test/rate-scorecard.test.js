const test = QUnit.test;
import rateScorecard from '../src/eval/calculate/rate-scorecard.js';

test('if apple is highest score return apple', function(assert) {
    const scorecard = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const expected = 'apple';
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if banana is highest score return banana', function(assert) {
    const scorecard = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const expected = 'banana';
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if kiwi is highest score return kiwi', function(assert) {
    const scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const expected = 'kiwi';
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if blueberry is highest score return blueberry', function(assert) {
    const scorecard = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const expected = 'blueberry';
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});