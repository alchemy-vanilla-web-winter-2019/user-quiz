import finalResult from '../../src/final-results-page/final-results-page.js';

const test = QUnit.test;

QUnit.module('final results from our quiz');

test('final result is German Shepard if highest on scorecard ', function(assert) {
    const pizzaAnswer = { food: 'pizza' };
    const result = finalResult(pizzaAnswer);
  //assert.deepEqual(result, expected);
    assert.deepEqual(result, 'German Shepard');
});

test('final result is Pug if highest on scorecard', function(assert) {
    const cakeAnswer = { food: 'cake' };
    const cakeResult = finalResult(cakeAnswer);
    assert.deepEqual(cakeResult, 'Pug')
});

test('final result is Labradoodle if highest on scorecard', function(assert) {
    const saladAnswer = { food: 'salad' };
    const saladResult = finalResult(saladAnswer);
    assert.deepEqual(saladResult, 'Labradoodle');
});