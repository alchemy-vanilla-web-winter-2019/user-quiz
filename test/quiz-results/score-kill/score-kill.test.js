import scoreKill from '../../../src/quiz-results/score-kill/score-kill.js';

const test = QUnit.test;

QUnit.module('update scorecard based on kill checkboxes chosen');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { colville: 0, mercer: 0, perkins: 0 };
});

test('if no checkboxes are checked incriment mercer by 1', function(assert) {
    const kill = null;
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0, mercer: 1, perkins: 0 });
});