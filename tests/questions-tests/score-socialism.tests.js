const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { yes: 0, no: 0, eh: 0 };
});

import scoreSocialism from '../../src/questions/score-socialism.js';

test('score value for socialism: yes and eh', function(assert) {
    scoreSocialism('socialism', scorecard);
    assert.deepEqual(scorecard, { yes: 1, no: 0, eh: 1 });
});

test('score value for monarchy: yes', function(assert) {
    scoreSocialism('monarchy', scorecard);
    assert.deepEqual(scorecard, { yes: 1, no: 0, eh: 0 });
});

test('score value for capitalism: no', function(assert) {
    scoreSocialism('capitalism', scorecard);
    assert.deepEqual(scorecard, { yes: 0, no: 1, eh: 0 });
});