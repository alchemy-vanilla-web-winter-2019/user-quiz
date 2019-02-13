const test = QUnit.test;
import helpCheck from '../src/result/calculate/help-check.js';

QUnit.module('help-check');
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
});

let scorecard = null;

test('add 1 to Gryffindor if "right" is selected', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    const result = helpCheck('right', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Slytherin if "ignore" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 0 };
    const result = helpCheck('ignore', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Ravenclaw if "quick" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 1, hufflepuff: 0 };
    const result = helpCheck('quick', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Huffepuff if "stop" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 1 };
    const result = helpCheck('stop', scorecard);
    assert.deepEqual(result, expected);
});