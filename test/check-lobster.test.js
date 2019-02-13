const test = QUnit.test;

let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

import checkLobster from '../src/eval/calculate/check-lobster.js';

test('add 1 to blueberry if lovers is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkLobster('lovers', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to kiwi if surf is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkLobster('surf', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to banana if paradise is selected', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkLobster('paradise', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to apple if roll is selected', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkLobster('roll', scorecard);
    assert.deepEqual(result, expected);
});