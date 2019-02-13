import timeScoreCrunch from '../../src/time-score-crunch/time-score-crunch.js';

const test = QUnit.test;

QUnit.module('Crunch answers for the "time" of day question:');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { red: 0, blue: 0, purple: 0, black: 0, yellow: 0, green: 0 };
});

test('increment colors when MORNING is selected', function(assert) {
    timeScoreCrunch('morning', scorecard);
    assert.deepEqual(scorecard, { red: 0.5, blue: 0, purple: 0.5, black: 0, yellow: 1, green: 0.5 });
}) ;

test('increment colors when MIDDAY is selected', function(assert) {
    timeScoreCrunch('mid-day', scorecard);
    assert.deepEqual(scorecard, { red: 0.25, blue: 1, purple: 0.25, black: 0, yellow: 0.5, green: 0.5 });
}) ;

test('increment colors when EVENING is selected', function(assert) {
    timeScoreCrunch('evening', scorecard);
    assert.deepEqual(scorecard, { red: 0.5, blue: 0.5, purple: 0.5, black: 1, yellow: 0, green: 0 });
}) ;

test('increment colors when midnight is selected', function(assert) {
    timeScoreCrunch('midnight', scorecard);
    assert.deepEqual(scorecard, { red: 0, blue: 0.5, purple: 0.5, black: 1, yellow: 0.5, green: 0 });
}) ;

