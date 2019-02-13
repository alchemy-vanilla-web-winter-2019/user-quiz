import quizResult from '../../src/results-calculate/quiz.result.js';

QUnit.module('quiz results');

const test = QUnit.test;

test('takes flavor answer values, and calculates dessert result', function(assert) {
    const answers = {
        flavor: 'spiced'
    };
    const result = quizResult(answers);
    assert.equal(result, 'Tiramisu');
});