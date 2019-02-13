import finalResult from '../../src/final-results-page/final-results-page.js';

const test = QUnit.test;

QUnit.module('final results from our quiz');

test('final result is German Shepard if highest on scorecard ', function(assert) {
    const answer = { food: 'pizza'};
    const result = finalResult(answer);
    assert.deepEqual();
});