const test = QUnit.test;

import tally from '../../src/questions/tally.js';

test('if yes is highest return yes', function(assert) {
    const scorecard = { yes: 1, no: 0, eh: 1 };
    const result = tally(scorecard);
    assert.equal(result, 'yes');
});

test('if no is highest return no', function(assert) {
    const scorecard = { yes: 0, no: 1, eh: 0 };
    const result = tally(scorecard);
    assert.equal(result, 'no');
});

test('if eh is highest return eh', function(assert) {
    const scorecard = { yes: 0, no: 0, eh: 1 };
    const result = tally(scorecard);
    assert.equal(result, 'eh');
});