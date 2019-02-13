import quizResult from '../../src/results-calculate/quiz-result.js';
const test = QUnit.test;
QUnit.module('quiz results');


test('takes answers and calculate result', function(assert){
    const answers = {
        park: 'waterpark'
    };
    const result = quizResult(answers);
    assert.equal(result, 'jerry');
});

