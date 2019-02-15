import tally from '../../src/questions/tally.js';
const test = QUnit.test;

QUnit.module('tally score');

test('if soma is highest: return soma', function(assert) {
    const scorecard = { soma: 1, akira: 0, ikumi: 0 };
    const result = tally(scorecard);
    assert.deepEqual(result, 'soma');
});

test('if akira is highest: return akira', function(assert) {
    const scorecard = { soma: 0, akira: 1, ikumi: 0 };
    const result = tally(scorecard);
    assert.deepEqual(result, 'akira');
});

test('if ikumi is highest: return ikumi', function(assert) {
    const scorecard = { soma: 0, akira: 0, ikumi: 1 };
    const result = tally(scorecard);
    assert.deepEqual(result, 'ikumi');
});