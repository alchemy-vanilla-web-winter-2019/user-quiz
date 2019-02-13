import scoreBudget from '../src/calculate/score-budget.js';

const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function() {
    scorecard = {
        timberline : 0,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
});

test('if budget is expensive, timberline, hawaii, and nyc scores increase', function(assert) {
    const expected = {
        timberline : 1,
        hawaii : 1,
        nyc : 1,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    scoreBudget('expensive', scorecard);
    assert.deepEqual(scorecard, expected);
});

test('if budget is cheap, cabin, thailand, and hanoi scores increase', function(assert) {
    const expected = {
        timberline : 0,
        hawaii : 0,
        nyc : 0,
        cabin : 1,
        thailand : 1,
        hanoi : 1
    };
    scoreBudget('cheap', scorecard);
    assert.deepEqual(scorecard, expected);
});