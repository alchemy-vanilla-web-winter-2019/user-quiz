import rateScorecard from '../src/calculate/rate-scorecard.js';
const test = QUnit.test;

test('if timberline has the highest score, return Timberline Lodge', function(assert) {
    const expected = 'Timberline Lodge';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if timberline has the highest score, return Timberline Lodge', function(assert) {
    const expected = 'Timberline Lodge';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if hawaii has the highest score, return Hawaii', function(assert) {
    const expected = 'Hawaii';
    const scorecard = {
        timberline : 1,
        hawaii : 2,
        nyc : 0,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if nyc has the highest score, return New York City', function(assert) {
    const expected = 'New York City';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 2,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});


test('if cabin has the highest score, return a forest service cabin in the Mount Hood National Forest', function(assert) {
    const expected = 'a forest service cabin in the Mount Hood National Forest';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 2,
        thailand : 0,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if thailand has the highest score, return Thailand', function(assert) {
    const expected = 'Thailand';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 2,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});

test('if hanoi has the highest score, return Hanoi, Vietnam', function(assert) {
    const expected = 'Hanoi, Vietnam';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 2,
        hanoi : 3
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});