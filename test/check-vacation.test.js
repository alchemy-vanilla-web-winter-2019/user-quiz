const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});
import checkVacation from '../src/eval/calculate/check-vacation.js';

test('add 1 to kiwi if outback is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkVacation('outback', scorecard);

    assert.deepEqual(result, expected);
});
test('add 1 to apple if europe is selected', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkVacation('europe', scorecard);

    assert.deepEqual(result, expected);
});
test('add 1 to banana if bahamas is selected', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkVacation('bahamas', scorecard);

    assert.deepEqual(result, expected);
});
test('add 1 to blueberry if africa is selected', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkVacation('africa', scorecard);

    assert.deepEqual(result, expected);
});