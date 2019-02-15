import scoreFood from '../../src/questions/score-food.js';
const test = QUnit.test;

QUnit.module('score food');

let scorecard = null;


QUnit.testStart(function() {
    scorecard = { soma: 0, akira: 0, ikumi: 0 };
});

test('score foods: soma', function(assert) {
    scoreFood('Japanese', scorecard);
    assert.deepEqual(scorecard, { soma: 1, akira: 0, ikumi: 0 });
});

test('score foods: ikumi', function(assert) {
    scoreFood('American', scorecard);
    assert.deepEqual(scorecard, { soma: 0, akira: 0, ikumi: 1 });
});

test('score foods: akira', function(assert) {
    scoreFood('Indian', scorecard);
    assert.deepEqual(scorecard, { soma: 0, akira: 1, ikumi: 0 });
});