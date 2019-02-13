import scoreArtist from '../../src/quiz-results/scoreArtist.js';

const test = QUnit.test;
QUnit.module('Scoring Song');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { bluegrass: 0, pop: 0, hiphop: 0 };
});

test('Increase scorecard if Artist is bluegrass', function(assert) {
    // act
    scoreArtist('bluegrass', scorecard);
    // assert
    assert.deepEqual(scorecard, { bluegrass: 1, pop: 0, hiphop: 0 });
});

test('Increase scorecard if Artist is pop', function(assert) {
    // act
    scoreArtist('pop', scorecard);
    // assert
    assert.deepEqual(scorecard, { bluegrass: 0, pop: 1, hiphop: 0 });
});

test('Increase scorecard if Artist is hiphop', function(assert) {
    // act
    scoreArtist('hiphop', scorecard);
    // assert
    assert.deepEqual(scorecard, { bluegrass: 0, pop: 0, hiphop: 1 });
});