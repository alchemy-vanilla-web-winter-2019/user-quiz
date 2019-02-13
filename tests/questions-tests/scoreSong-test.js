import scoreSong from '../../src/quiz-results/scoreSong.js';

const test = QUnit.test;

QUnit.module('Scoring Song');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { bluegrass: 0, pop: 0, hiphop: 0 };
});

test('Bluegrass song adds 1 to bluegrass on the scorecard', function(assert) {
    // act
    scoreSong('bluegrass', scorecard);
    // assert
    assert.deepEqual(scorecard, { bluegrass: 1, pop: 0, hiphop: 0 });
});

test('Pop song adds 1 to pop on the scorecard', function(assert) {
    // act
    scoreSong('pop', scorecard);
    // assert
    assert.deepEqual(scorecard, { bluegrass: 0, pop: 1, hiphop: 0 });
});

test('Hiphop song adds 1 to hiphop value on scorecard', function(assert){
    scoreSong('hiphop', scorecard);
    assert.deepEqual(scorecard, { bluegrass: 0, pop: 0, hiphop: 1 });
});