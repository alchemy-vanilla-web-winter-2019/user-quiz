const test = QUnit.test;
import checkFriday from '../src/result/calculation/check-friday.js';
let scorecard = null;
QUnit.testStart(function() {
    scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
});



test('add one to sophia if "lasagna" is checked', function(assert) {
    const expected = { sophia: 1, dorothy: 0, rose: 0, blanche: 0 };
    const result = checkFriday('lasagna', scorecard);

    assert.deepEqual(result, expected);
});
test('add one to dorothy if "cheesecake" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 1, rose: 0, blanche: 0 };
    const result = checkFriday('cheesecake', scorecard);

    assert.deepEqual(result, expected);
});
test('add one to rose if "lanai" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 0, rose: 1, blanche: 0 };
    const result = checkFriday('lanai', scorecard);

    assert.deepEqual(result, expected);
});
test('add one to blanche if "date" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 0, rose: 0, blanche: 1 };
    const result = checkFriday('date', scorecard);

    assert.deepEqual(result, expected);
});