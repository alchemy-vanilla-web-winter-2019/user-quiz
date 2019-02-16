const test = QUnit.test;
import topScore from '../../src/favorite-emotion/favorite-emotion.js';

QUnit.module('scoring the first fieldset "favorite emotion"');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { melancholic: 0, euphoric: 0, enraged: 0 };

});

test('the option "Melancholic" is selected as favorite', function(assert){
    // create function variable with speculative parameters that would achieve the goal stated in single quotes
    topScore('melancholic', scorecard);
    assert.deepEqual(scorecard, { melancholic: 1, euphoric: 0, enraged: 0 });
    
});

test('the option "Euphoric" is selected as favorite', function(assert){
    // create function variable with speculative parameters that would achieve the goal stated in single quotes
    topScore('euphoric', scorecard);
    assert.deepEqual(scorecard, { melancholic: 0, euphoric: 1, enraged: 0 });
    
});

test('the option "Enraged" is selected as favorite', function(assert){
    // create function variable with speculative parameters that would achieve the goal stated in single quotes
    topScore('enraged', scorecard);
    assert.deepEqual(scorecard, { melancholic: 0, euphoric: 0, enraged: 1 });
    
});

