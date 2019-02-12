import foodScore from '../../src/quiz-results/food-score.js';
const test = QUnit.test;

QUnit.module('tests for scoring food choices');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { pizza: 0, cake: 0, salad: 0 };
});

test('pizza choice give +1 to scorecard', function(assert) {
    foodScore('pizza', scorecard);
    assert.deepEqual(scorecard, { pizza: 1, cake: 0, salad: 0 });
});