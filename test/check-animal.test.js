const test = QUnit.test;
let scorecard = {};
import checkAnimal from '../src/eval/calculate/check-animal.js';
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

test('if animal equals monkey add 1 to banana', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkAnimal('monkey', scorecard);

    assert.deepEqual(result, expected);
});

test('if animal equals pig add 1 to kiwi', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkAnimal('pig', scorecard);

    assert.deepEqual(result, expected);
});

test('if animal equals crow add 1 to blueberry', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkAnimal('crow', scorecard);

    assert.deepEqual(result, expected);
});

test('if animal equals horse add 1 to apple', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkAnimal('horse', scorecard);

    assert.deepEqual(result, expected);
});