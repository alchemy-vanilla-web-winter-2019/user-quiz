import calculateResult from '../src/calculate/calculate-result.js';
const test = QUnit.test;

test('if answers are expensive and mountains, return Timberline Lodge', function(assert) {
    const expected = 'Timberline Lodge';
    const answer = { budget: 'expensive', environment: 'mountains' };
    const result = calculateResult(answer);

    assert.equal(result, expected);
});

test('if answers are expensive and beach, return Hawaii', function(assert) {
    const expected = 'Hawaii';
    const answer = { budget: 'expensive', environment: 'beach' };
    const result = calculateResult(answer);

    assert.equal(result, expected);
});

test('if answers are expensive and city, return New York City', function(assert) {
    const expected = 'New York City';
    const answer = { budget: 'expensive', environment: 'city' };
    const result = calculateResult(answer);

    assert.equal(result, expected);
});

test('if answers are cheap and mountains, return a forest service cabin in the Mount Hood National Forest', function(assert) {
    const expected = 'a forest service cabin in the Mount Hood National Forest';
    const answer = { budget: 'cheap', environment: 'mountains' };
    const result = calculateResult(answer);

    assert.equal(result, expected);
});

test('if answers are cheap and beach, return Thailand', function(assert) {
    const expected = 'Thailand';
    const answer = { budget: 'cheap', environment: 'beach' };
    const result = calculateResult(answer);

    assert.equal(result, expected);
});

test('if answers are cheap and city, return Hanoi, Vietnam', function(assert) {
    const expected = 'Hanoi, Vietnam';
    const answer = { budget: 'cheap', environment: 'city' };
    const result = calculateResult(answer);

    assert.equal(result, expected);
});