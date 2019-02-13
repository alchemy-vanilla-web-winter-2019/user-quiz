const test = QUnit.test;
import displayResults from '../src/eval/display-results.js';

test('if apple has the highest score return apple', function(assert) {
    const answers = { color: 'red', animal: 'horse', movie: 'saw' };
    const expected = 'apple';
    const result = displayResults(answers);

    assert.equal(result, expected);
});

test('if banana has the highest score return banana', function(assert) {
    const answers = { color: 'yellow', animal: 'monkey', movie: 'saw' };
    const expected = 'banana';
    const result = displayResults(answers);

    assert.equal(result, expected);
});

test('if kiwi has the highest score return kiwi', function(assert) {
    const answers = { color: 'green', animal: 'pig', movie: 'saw' };
    const expected = 'kiwi';
    const result = displayResults(answers);

    assert.equal(result, expected);
});

test('if blueberry has the highest score return blueberry', function(assert) {
    const answers = { color: 'blue', animal: 'crow', movie: 'saw' };
    const expected = 'blueberry';
    const result = displayResults(answers);

    assert.equal(result, expected);
});