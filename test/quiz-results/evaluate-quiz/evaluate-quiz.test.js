import evaluateQuiz from '../../../src/quiz-results/evaluate-quiz/evaluate-quiz.js';

const test = QUnit.test;

QUnit.module('return greatest DM based on quiz answers');

test('return Matt Mercer if voice, star, and no kills were chosen for players', function(assert) {
    const answers = {
        players: 'voice',
        movie: 'star',
        kill: []
    };
    const expected = 'Matt Mercer';
    const result = evaluateQuiz(answers);
    assert.equal(expected, result);
});