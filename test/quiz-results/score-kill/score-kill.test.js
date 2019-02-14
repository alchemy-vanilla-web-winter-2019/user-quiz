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

test('honor and dishonor no change', function(assert) {
    const kill = ['honor', 'dishonor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0, mercer: 0, perkins: 0 });
});

test('honor and drama increment mercer by 1, colville and perkins by 0.5', function(assert) {
    const kill = ['honor', 'drama'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0.5, mercer: 1, perkins: 0.5 });
});

test('honor and poor increment colville by 1, mercer by 0.5', function(assert) {
    const kill = ['honor', 'poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0.5, perkins: 0 });
});

test('dishonor and drama increment perkins by 1, colville by 0.5', function(assert) {
    const kill = ['dishonor', 'drama'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0.5, mercer: 0, perkins: 1 });
});

test('dishonor and poor increment colville by 1, perkins by 0.5', function(assert) {
    const kill = ['dishonor', 'poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0, perkins: 0.5 });
});

test('drama and poor increment colville by 1, perkins and mercer by 0.5', function(assert) {
    const kill = ['drama', 'poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0.5, perkins: 0.5 });
});

test('honor, dishonor and drama increment colville by 1, perkins by 0.5', function(assert) {
    const kill = ['honor', 'dishonor', 'drama'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0, perkins: 0.5 });
});

test('honor, drama and poor increment colville by 1, perkins and mercer by 0.5', function(assert) {
    const kill = ['honor', 'drama', 'poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0.5, perkins: 0.5 });
});

test('dishonor, drama and poor increment perkins by 1, colville by 0.5', function(assert) {
    const kill = ['dishonor', 'drama', 'poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0.5, mercer: 0, perkins: 1 });
});

test('honor, dishonor, drama and poor increment perkins by 1, colville by 0.5', function(assert) {
    const kill = ['honor', 'dishonor', 'drama', 'poor'];
    scoreKill(kill, scorecard);
    assert.deepEqual(scorecard, { colville: 0.5, mercer: 0, perkins: 1 });
});