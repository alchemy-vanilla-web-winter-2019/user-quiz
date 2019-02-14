import scoreKill from '../../../src/quiz-results/score-kill/score-kill.js';

const test = QUnit.test;

QUnit.module('update scorecard based on kill checkboxes chosen');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { colville: 0, mercer: 0, perkins: 0 };
});

test('if no checkboxes are checked increment mercer by 1 and decrement others by 1', function(assert) {
    const kill = [];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: -1, mercer: 1, perkins: -1 });
});

test('if just honor is checked increment mercer by 1 and others by 0.5', function(assert) {
    const kill = ['honor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0.5, mercer: 1, perkins: 0.5 });
});

test('if just dishonor is checked increment perkins by 1 and decrement mercer by 1', function(assert) {
    const kill = ['dishonor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0, mercer: -1, perkins: 1 });
});

test('if only drama is chosen increment colville and mercer by 1', function(assert) {
    const kill = ['drama'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 1, perkins: 0 });
});

test('if only poor is chosen increment colville and perkins by 1', function(assert) {
    const kill = ['poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0, perkins: 1 });
});