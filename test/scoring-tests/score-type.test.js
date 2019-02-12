import scoreType from '../../src/scoring/score-type.js';
const test = QUnit.test;

QUnit.module('Scoring "Type"');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { assassin: 0, fighter: 0, mage: 0, marksman: 0, support: 0, tank: 0 };
});

test('Physical is selected', function(assert) {
    scoreType('physical', scorecard);
    const expected = {
        assassin: 7 / 15,
        fighter: 35 / 40,
        mage: 0 / 33,
        marksman: 21 / 22,
        support: 1 / 14,
        tank: 6 / 19
    };
    assert.deepEqual(scorecard, expected);
});

test('Magical is selected', function(assert) {
    scoreType('magical', scorecard);
    const expected = {
        assassin: 8 / 15,
        fighter: 11 / 40,
        mage: 33 / 33,
        marksman: 5 / 22,
        support: 13 / 14,
        tank: 16 / 19
    };
    assert.deepEqual(scorecard, expected);
});