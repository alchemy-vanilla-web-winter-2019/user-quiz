import scoreRange from '../../src/scoring/score-range.js';
const test = QUnit.test;

QUnit.module('Scoring "Range"');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { assassin: 0, fighter: 0, mage: 0, marksman: 0, support: 0, tank: 0 };
});

test('Short range is selected', function(assert) {
    scoreRange('short', scorecard);
    const expected = {
        assassin: 13 / 15,
        fighter: 38 / 40,
        mage: 1 / 33,
        marksman: 0,
        support: 6 / 14,
        tank: 1
    };
    assert.deepEqual(scorecard, expected);
});

test('Long range is selected', function(assert) {
    scoreRange('long', scorecard);
    const expected = {
        assassin: 2 / 15,
        fighter: 2 / 40,
        mage: 32 / 33,
        marksman: 1,
        support: 8 / 14,
        tank: 0
    };
    assert.deepEqual(scorecard, expected);
});