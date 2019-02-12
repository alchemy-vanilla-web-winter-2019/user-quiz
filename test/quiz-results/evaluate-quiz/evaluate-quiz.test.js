import evaluateQuiz from '../../../src/quiz-results/evaluate-quiz/evaluate-quiz.js';

const test = QUnit.test;

QUnit.module('return greatest DM based on quiz answers');

test('return Matt Mercer if voice was chosen for players', function(assert) {
    const answers = {
        players: 'voice'
    };
    const expected = 'Matt Mercer';
    const result = evaluateQuiz(answers);
    assert.equal(expected, result);
});

test('return Matt Colville if normal was chosen for players', function(assert) {
    const answers = {
        players: 'normal'
    };
    const expected = 'Matt Colville';
    const result = evaluateQuiz(answers);
    assert.equal(expected, result);
});

test('return Chris Perkins if employees was chosen for players', function(assert) {
    const answers = {
        players: 'employees'
    };
    const expected = 'Chris Perkins';
    const result = evaluateQuiz(answers);
    assert.equal(expected, result);
});