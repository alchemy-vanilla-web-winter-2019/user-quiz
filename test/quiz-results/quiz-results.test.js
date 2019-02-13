import quizResults from '../../src/results/quiz-results.js';

const test = QUnit.test;

QUnit.module('put everything together for quiz results');

test('scoring quiz results', function(assert) {
    const answers = {
        time: 'morning'
    };

    const choice = quizResults(answers);

    assert.equal(choice, 'yellow');

});
