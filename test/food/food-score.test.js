import foodScore from '../../src/quiz-results/food-score.js';
const test = QUnit.test;

QUnit.module('tests for scoring food choices');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { germanshepard: 0, pug: 0, labradoodle: 0 };
});

test('pizza choice give +1 to scorecard', function(assert) {
    foodScore('pizza', scorecard);
    assert.deepEqual(scorecard, { germanshepard: 1, pug: 0, labradoodle: 0 });
});

test('cake choice give +1 to scorecard', function(assert) {
    foodScore('cake', scorecard);
    assert.deepEqual(scorecard, { germanshepard: 0, pug: 1, labradoodle: 0 });
});

test('salad choice give +1 to scorecard', function(assert) {
    foodScore('salad', scorecard);
    assert.deepEqual(scorecard, { germanshepard: 0, pug: 0, labradoodle: 1 });
});
