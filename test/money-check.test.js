const test = QUnit.test;
import moneyCheck from '../src/result/calculate/money-check.js';

QUnit.module('money-check');
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
});

let scorecard = null;

test('add 1 to Gryffindor if "owner" is selected', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    const result = moneyCheck('owner', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Slytherin if "take" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 0 };
    const result = moneyCheck('take', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Ravenclaw if "leave" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 1, hufflepuff: 0 };
    const result = moneyCheck('leave', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Hufflepuff if "donate" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 1 };
    const result = moneyCheck('donate', scorecard);
    assert.deepEqual(result, expected);
});