const test = QUnit.test;

import scoreCoffee from '../../src/questions/score-coffee.js';

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { yes: 0, no: 0, eh: 0 };
});


test('score value for sweet: yes', function(assert) {
    scoreCoffee('sweet', scorecard);
    assert.deepEqual(scorecard, { yes: 1, no: 0, eh: 0 });
});

test('score value for black: no', function(assert) {
    scoreCoffee('black', scorecard);
    assert.deepEqual(scorecard, { yes: 0, no: 1, eh: 0 });
});

test('score value for milk: eh', function(assert) {
    scoreCoffee('milk', scorecard);
    assert.deepEqual(scorecard, { yes: 0, no: 0, eh: 1 });
});