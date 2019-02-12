import scorePlayers from '../../src/score-players/score-players.js';

const test = QUnit.test;

QUnit.module('update scorecard based on type of players chosen');

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { colville: 0, mercer: 0, perkins: 0 };
});

test('when normal is chosen, incriment colville by 1 on scorecard', function(assert) {
    const players = 'normal';
    scorePlayers(players, scorecard);
    assert.deepEqual(scorecard, { colville: 1, mercer: 0, perkins: 0 });
});

test('when voice is chosen, incriment mercer by 1 on scorecard', function(assert) {
    const players = 'voice';
    scorePlayers(players, scorecard);
    assert.deepEqual(scorecard, { colville: 0, mercer: 1, perkins: 0 });
});

test('when employees is chosen, incriment perkins by 1 on scorecard', function(assert) {
    const players = 'employees';
    scorePlayers(players, scorecard);
    assert.deepEqual(scorecard, { colville: 0, mercer: 0, perkins: 1 });
});