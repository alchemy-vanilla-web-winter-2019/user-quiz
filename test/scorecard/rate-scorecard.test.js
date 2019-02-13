import rateScorecard from '../../src/quiz-results/rate-scorecard.js';

const test = QUnit.test;

QUnit.module('tests for rating scorecard');

test('returns German Shepard when > value', function(assert) {
    const result = rateScorecard({ germanshepard: 1, pug: 0, labradoodle: 0 });
    //-- above you can pass an object that's never defined
    assert.deepEqual(result, 'German Shepard');
});

test('returns Pug when > value', function(assert) {
    const result = rateScorecard({ germanshepard: 0, pug: 1, labradoodle: 0 });
    assert.deepEqual(result, 'Pug');
});

test('returns Labradoodle when > value', function(assert) {
    const result = rateScorecard({ germanshepard: 0, pug: 0, labradoodle: 1 });
    assert.deepEqual(result, 'Labradoodle');
});