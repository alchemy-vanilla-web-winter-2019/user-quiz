const test = QUnit.test;
import topColor from '../../src/favorite-shape/favorite-shape.js';
//import function when you make it!

let scorecard = null;

QUnit.module('scoring the second fieldset "favorite shapes"');

QUnit.testStart(function(){
    scorecard = { melancholic: 0, euphoric: 0, enraged: 0 };
});

//this test will take the value of the radio inputs and add to the existing fieldset tally to return a color

test('the option "Melancholic" is selected as favorite', function(assert){
    // create function variable with speculative parameters that would achieve the goal stated in single quotes
    topColor('melancholic', scorecard);
    assert.deepEqual(scorecard, { melancholic: .4, euphoric: 0, enraged: 0 });
    
});

test('the option "Euphoric" is selected as favorite', function(assert){
    // create function variable with speculative parameters that would achieve the goal stated in single quotes
    topColor('euphoric', scorecard);
    assert.deepEqual(scorecard, { melancholic: 0, euphoric: .6, enraged: 0 });
    
});

test('the option "Enraged" is selected as favorite', function(assert){
    // create function variable with speculative parameters that would achieve the goal stated in single quotes
    topColor('enraged', scorecard);
    assert.deepEqual(scorecard, { melancholic: 0, euphoric: 0, enraged: .3 });
    
});

// test('test to see if "Euphoric" will return the color purple', function(assert){
//     scorecard = { melancholic: 0, euphoric: 1, enraged: 0 };
//     //expected outcome
//     //fictional function to produce outcome
//     //assert.equal(the result, and the expected outcome)
//     let expectedOutcome = 'green';
//     const result = topColor(scorecard);
//     assert.equal(result, expectedOutcome);

// });
