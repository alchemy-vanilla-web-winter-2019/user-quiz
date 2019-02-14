import scoreEngage from '../../src/scoring/score-engage.js';
const test = QUnit.test;

QUnit.module('Scoring "Engage"');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { assassin: 0, fighter: 0, mage: 0, marksman: 0, support: 0, tank: 0 };
});

test('Yes is selected', function(assert) {
    scoreEngage('yes', scorecard);
    const expected = {
        assassin: 6 / 15,
        fighter: 34 / 40,
        mage: 20 / 33,
        marksman: 5 / 22,
        support: 10 / 14,
        tank: 19 / 19
    };
    assert.deepEqual(scorecard, expected);
});

test('Avoid is selected', function(assert) {
    scoreEngage('avoid', scorecard);
    const expected = {
        assassin: 4 / 15,
        fighter: 9 / 40,
        mage: 26 / 33,
        marksman: 13 / 22,
        support: 12 / 14,
        tank: 7 / 19
    };
    assert.deepEqual(scorecard, expected);
});

test('Clean is selected', function(assert) {
    scoreEngage('clean', scorecard);
    const expected = {
        assassin: 12 / 15,
        fighter: 14 / 40,
        mage: 20 / 33,
        marksman: 22 / 22,
        support: 1 / 14,
        tank: 1 / 19
    };
    assert.deepEqual(scorecard, expected);
});