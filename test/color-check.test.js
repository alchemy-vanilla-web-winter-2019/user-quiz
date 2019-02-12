const test = QUnit.test;
import checkColor from '../src/eval/calculate/check-color.js';

let scorecard = [];
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

test('if color is red add 1 to apple', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkColor('red', scorecard);
    
    assert.deepEqual(result, expected);
});
test('if color is yellow add 1 to banana', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkColor('yellow', scorecard);
    
    assert.deepEqual(result, expected);
});
test('if color is green add 1 to kiwi', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkColor('green', scorecard);
    
    assert.deepEqual(result, expected);
});
test('if color is blue add 1 to blueberry', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkColor('blue', scorecard);
    
    assert.deepEqual(result, expected);
});