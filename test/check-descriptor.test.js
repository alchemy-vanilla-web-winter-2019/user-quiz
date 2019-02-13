const test = QUnit.test;
import descriptorCheck from '../src/result/calculation/check-descriptor.js';

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
});



test('add one to sophia if "old" is checked', function(assert) {
    const expected = { sophia: 1, dorothy: 0, rose: 0, blanche: 0 };
    const result = descriptorCheck('old', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to dorothy if "masculine" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 1, rose: 0, blanche: 0 };
    const result = descriptorCheck('masculine', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to rose if "dumb" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 0, rose: 1, blanche: 0 };
    const result = descriptorCheck('dumb', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to blanche if "sexy" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 0, rose: 0, blanche: 1 };
    const result = descriptorCheck('sexy', scorecard);

    assert.deepEqual(result, expected);
});
