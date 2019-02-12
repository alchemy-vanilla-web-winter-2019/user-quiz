const test = QUnit.test;
import wordCheck from '../src/result/calculate/word-check.js';

QUnit.module('word-score');
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
});

let scorecard = null;

test('add 1 to Gryffindor if "loyal" is selected', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    const result = wordCheck('loyal', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Slytherin if "cunning" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 0 };
    const result = wordCheck('cunning', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Ravenclaw if "intelligent" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 1, hufflepuff: 0 };
    const result = wordCheck('intelligent', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Hufflepuff if "determined" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 1 };
    const result = wordCheck('determined', scorecard);
    assert.deepEqual(result, expected);
});