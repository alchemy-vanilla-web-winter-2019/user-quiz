const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

import checkDessert from '../src/eval/calculate/check-dessert.js';

test('add 2 to blueberry if crumble is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 2, kiwi: 0 };
    const result = checkDessert('crumble', scorecard);

    assert.deepEqual(result, expected);
});
test('add 2 to apple if pie is selected', function(assert) {
    const expected = { apple: 2, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkDessert('pie', scorecard);

    assert.deepEqual(result, expected);
});
test('add 2 to kiwi if parfait is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 2 };
    const result = checkDessert('parfait', scorecard);

    assert.deepEqual(result, expected);
});
test('add 2 to banana if pudding is selected', function(assert) {
    const expected = { apple: 0, banana: 2, blueberry: 0, kiwi: 0 };
    const result = checkDessert('pudding', scorecard);

    assert.deepEqual(result, expected);
});