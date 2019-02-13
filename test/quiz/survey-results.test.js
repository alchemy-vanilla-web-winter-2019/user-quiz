import surveyResults from '../../src/quiz/survey-results.js';

const test = QUnit.test;

QUnit.module('score the results of the quiz');

test('scoring the quiz results', function(assert) {
    const answers = {
        wealth: 'land',
        religion: 'atheist'
    };
    
    const result = surveyResults(answers);
    assert.equal(result, 'barbara');
});

