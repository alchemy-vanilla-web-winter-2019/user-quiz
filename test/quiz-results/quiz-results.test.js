import quizResult from '../../src/results-calculate/quiz-results.js';


QUnit.module('quiz results');

const test = QUnit.test;





test('takes flavor answer values, and calculates dessert results', function(assert) {
    const answers = {
        flavor: 'spiced'
    };
    const result = quizResult(answers);
    assert.equal(result, 'tiramisu');
});