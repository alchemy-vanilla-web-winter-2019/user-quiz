import quizResult from '../../src/results-calculate/quiz-result.js';
const test = QUnit.test;
QUnit.module('quiz results');

test('taking in answers and calculating results', function(assert) {
    const answers = {
        park: 'waterpark'
    };

    const result = quizResult(answers);
    assert.equal(result, 'jerry');
});