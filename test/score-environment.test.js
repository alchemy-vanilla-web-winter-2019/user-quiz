import scoreEnvironment from '../src/calculate/score-environment.js';
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

test('if environment is mountains, increase timberline and cabin scores', function(assert) {
    const expected = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 1,
        thailand : 0,
        hanoi : 0
    };
    scoreEnvironment('mountains', scorecard);

    assert.deepEqual(scorecard, expected);
});

test('if environment is beach, increase hawaii and thailand scores', function(assert) {
    const expected = {
        timberline : 0,
        hawaii : 1,
        nyc : 0,
        cabin : 0,
        thailand : 1,
        hanoi : 0
    };
    scoreEnvironment('beach', scorecard);

    assert.deepEqual(scorecard, expected);
});

test('if environment is city, increase nyc and hanoi scores', function(assert) {
    const expected = {
        timberline : 0,
        hawaii : 0,
        nyc : 1,
        cabin : 0,
        thailand : 0,
        hanoi : 1
    };
    scoreEnvironment('city', scorecard);

    assert.deepEqual(scorecard, expected);
});