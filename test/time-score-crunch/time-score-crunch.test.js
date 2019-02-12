//import
import timeScoreCrunch from '../../src/time-score-crunch/time-score-crunch.js';

//declare that it's a test
const test = QUnit.test;

//let it know it's a module, and the name of the entire series of this test
QUnit.module('Crunch answers for the "time" of day question:');

let scorecard = null;
//establish scorecard. will eventually do a testStart method to not repeat the scorecard
QUnit.testStart(function() {
    scorecard = { red: 0, blue: 0, purple: 0, black: 0, yellow: 0, green: 0 };
});

test('increment colors when MORNING is selected', function(assert) {
    //arrange ... in the testStart method
    //act
    timeScoreCrunch('morning', scorecard);
    //assert
    assert.deepEqual({ red: 0.5, blue: 0, purple: 0.5, black: 0, yellow: 1, green: 0.5 }, scorecard);
}) ;