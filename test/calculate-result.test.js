const test = QUnit.test;

import calculateResult from '../src/result/calculation/calculate-result.js';

test('return Sophia if Sophia has the highest scorecard total', function(assert) {
    const answers = { season: 'winter', descriptor: 'old', friday: 'lasagna' };
    const expected = "Sophia";
    const result = calculateResult(answers);

    assert.equal(result, expected);
});

test('return Dorothy if Dorothy has the highest scorecard total', function(assert) {
    const answers = { season: 'autumn', descriptor: 'old', friday: 'cheesecake' };
    const expected = "Dorothy";
    const result = calculateResult(answers);

    assert.equal(result, expected);
});

test('return Rose if Rose has the highest scorecard total', function(assert) {
    const answers = { season: 'spring', descriptor: 'dumb', friday: 'cheesecake' };
    const expected = "Rose";
    const result = calculateResult(answers);

    assert.equal(result, expected);
});

test('return Blanche if Blanche has the highest scorecard total', function(assert) {
    const answers = { season: 'summer', descriptor: 'sexy', friday: 'cheesecake' };
    const expected = "Blanche";
    const result = calculateResult(answers);

    assert.equal(result, expected);
});