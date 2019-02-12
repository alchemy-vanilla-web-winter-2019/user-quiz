const test = QUnit.test;
import checkMovie from '../src/eval/calculate/check-movie.js';

let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

test('if movie equals excorsist add 1 to blueberry', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkMovie('exorcist', scorecard);

    assert.deepEqual(result, expected);
});

test('if movie equals psycho add 1 to kiwi', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkMovie('psycho', scorecard);

    assert.deepEqual(result, expected);
});

test('if movie equals nightmare add 1 to banana', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkMovie('nightmare', scorecard);

    assert.deepEqual(result, expected);
});

test('if movie equals saw add 1 to appple', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkMovie('saw', scorecard);

    assert.deepEqual(result, expected);
});