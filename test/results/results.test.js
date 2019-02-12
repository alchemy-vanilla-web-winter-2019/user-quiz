const test = QUnit.test;
import tally from '../../src/results/tally.js';

QUnit.module('testing results');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { ocean: 0, sun: 0, grass: 0 };
});

test('test to see if "sun" is assigned the value, and outputs "yello"', function(assert){
    let scorecard = { ocean: 0, sun: 1, grass: 0 };

    const expected = 'yellow';
    const result = tally(scorecard);
    assert.equal(result, expected);
});

test('test to see if "ocean" is assigned the value, and outputs "blue"', function(assert){
    let scorecard = { ocean: 1, sun: 0, grass: 0 };

    const expected = 'blue';
    const result = tally(scorecard);
    assert.equal(result, expected);
});

test('test to see if "grass" is assigned the value, and outputs "green"', function(assert){
    let scorecard = { ocean: 0, sun: 0, grass: 1 };

    const expected = 'green';
    const result = tally(scorecard);
    assert.equal(result, expected);
});

