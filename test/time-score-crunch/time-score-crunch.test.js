import timeScoreCrunch from '../../src/time-score-crunch/time-score-crunch.js';

const test = QUnit.test;

QUnit.module('Crunch answers for the "time" of day question:');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { red: 0, blue: 0, purple: 0, black: 0, yellow: 0, green: 0 };
});

test('increment colors when MORNING is selected', function(assert) {
    //arrange ... in the testStart method
    //act
    timeScoreCrunch('morning', scorecard);
    //assert
    assert.deepEqual(scorecard, { red: 0.5, blue: 0, purple: 0.5, black: 0, yellow: 1, green: 0.5 });
}) ;