const test = QUnit.test;
import colorCheck from '../src/result/calculate/color-check.js';

QUnit.module('color-score');
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
});

let scorecard = null;

test('add 1 to Gryffindor if "red" is selected', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    const result = colorCheck('red', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Slytherin if "green" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 0 };
    const result = colorCheck('green', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Ravenclaw if "blue" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 1, hufflepuff: 0 };
    const result = colorCheck('blue', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Hufflepuff if "yellow" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 1 };
    const result = colorCheck('yellow', scorecard);
    assert.deepEqual(result, expected);
});