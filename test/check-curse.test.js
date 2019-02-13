const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

import checkCurse from '../src/eval/calculate/check-curse.js';

test('add 1 to kiwi if f is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkCurse('f', scorecard);

    assert.deepEqual(result, expected);
});
test('add 1 to blueberry if s is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkCurse('s', scorecard);

    assert.deepEqual(result, expected);
});
test('add 1 to banana if b is selected', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkCurse('b', scorecard);

    assert.deepEqual(result, expected);
});
test('add 1 to apple if a is selected', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkCurse('a', scorecard);

    assert.deepEqual(result, expected);
});