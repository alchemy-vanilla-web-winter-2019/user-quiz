const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

import checkRelationship from '../src/eval/calculate/check-relationship.js';

test('add 1 to banana if married is selected', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkRelationship('married', scorecard);

    assert.deepEqual(result, expected);
});

test('add 1 to apple if dating is selected', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkRelationship('dating', scorecard);

    assert.deepEqual(result, expected);
});

test('add 1 to kiwi if poly is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkRelationship('poly', scorecard);

    assert.deepEqual(result, expected);
});

test('add 1 to blueberry if single is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkRelationship('single', scorecard);

    assert.deepEqual(result, expected);
});