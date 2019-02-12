const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

import checkTransportation from '../src/eval/calculate/check-transportation.js';

test('add 1 to banana if bike is selected', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkTransportation('bike', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to apple if car is selected', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkTransportation('car', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to blueberry if bus is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkTransportation('bus', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to kiwi if plane is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkTransportation('plane', scorecard);
    assert.deepEqual(result, expected);
});