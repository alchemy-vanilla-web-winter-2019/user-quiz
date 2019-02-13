import scoreMovie from '../../../src/quiz-results/score-movie/score-movie.js';

const test = QUnit.test;

QUnit.module('update scorecard based on movie chosen');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { colville: 0, mercer: 0, perkins: 0 };
});

test('incriment mercer and perkins by 1 for star', function(assert) {
    const movie = 'star';
    scoreMovie(movie, scorecard);
    assert.deepEqual(scorecard, { colville: 0, mercer: 1, perkins: 1 });
});

test('incriment colville and perkins by 1 for evil', function(assert) {
    const movie = 'evil';
    scoreMovie(movie, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0, perkins: 1 });
});

test('incriment colville by 1 and mercer by 0.5 for odyssey', function(assert) {
    const movie = 'odyssey';
    scoreMovie(movie, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0, perkins: 0.5 });
});

test('incriment mercer by 1 and colville by 0.5 for labyrinth', function(assert) {
    const movie = 'labyrinth';
    scoreMovie(movie, scorecard);
    assert.deepEqual(scorecard, { colville: 0.5, mercer: 1, perkins: 0 });
});