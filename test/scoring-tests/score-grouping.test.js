import scoreGrouping from '../../src/scoring/score-grouping.js';
const test = QUnit.test;

QUnit.module('Scoring "Grouping"');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { assassin: 0, fighter: 0, mage: 0, marksman: 0, support: 0, tank: 0 };
});

test('Large is selected', function(assert) {
    scoreGrouping('large', scorecard);
    const expected = {
        assassin: 2 / 15,
        fighter: 28 / 40,
        mage: 27 / 33,
        marksman: 15 / 22,
        support: 10 / 14,
        tank: 16 / 19
    };
    assert.deepEqual(scorecard, expected);
});

test('Duels is selected', function(assert) {
    scoreGrouping('duels', scorecard);
    const expected = {
        assassin: 15 / 15,
        fighter: 25 / 40,
        mage: 14 / 33,
        marksman: 14 / 22,
        support: 2 / 14,
        tank: 3 / 19
    };
    assert.deepEqual(scorecard, expected);
});