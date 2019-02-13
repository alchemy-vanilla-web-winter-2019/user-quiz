const test = QUnit.test;

import scoreAllergic from '../../src/questions/score-allergic.js/index.js.js';

// arrange
let scorecard = null;
QUnit.testStart(function() {
    scorecard = { yes: 0, no: 0, eh: 0 };
});

test('score value for allergic: yes', function(assert) {
    // act
    scoreAllergic('yes', scorecard);
    // assert
    assert.deepEqual(scorecard, { yes: 1, no: 0, eh: 0 });
});

test('score value for allergic: no', function(assert) {
    scoreAllergic('no', scorecard);
    assert.deepEqual(scorecard, { yes: 0, no: 1, eh: 0 });
});

test('score value for allergic: eh', function(assert) {
    scoreAllergic('eh', scorecard);
    assert.deepEqual(scorecard, { yes: 0, no: 0, eh: 1 });
});