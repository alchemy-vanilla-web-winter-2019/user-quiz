import evaluateScorecard from '../../src/evaluate-scorecard/evaluate-scorecard.js';

const test = QUnit.test;

QUnit.module('evaluate scorecard and return greatest DM');

test('mercer is greatest, return Matt Mercer', function(assert) {
    const scorecard = { colville: 0, mercer: 1, perkins: 0 };
    const expected = 'Matt Mercer';
    const result = evaluateScorecard(scorecard);
    assert.equal(result, expected);
});

test('colville is greatest, return Matt Colville', function(assert) {
    const scorecard = { colville: 1, mercer: 0, perkins: 0 };
    const expected = 'Matt Colville';
    const result = evaluateScorecard(scorecard);
    assert.equal(result, expected);
});

test('perkins is greatest, return Chris Perkins', function(assert) {
    const scorecard = { colville: 0, mercer: 0, perkins: 1 };
    const expected = 'Chris Perkins';
    const result = evaluateScorecard(scorecard);
    assert.equal(result, expected);
});

test('mercer is greatest, perkins is greater than colville return Matt Mercer', function(assert) {
    const scorecard = { colville: 0, mercer: 2, perkins: 1 };
    const expected = 'Matt Mercer';
    const result = evaluateScorecard(scorecard);
    assert.equal(result, expected);
});

test('tie for greatest between mercer and colville, return colville', function(assert) {
    const scorecard = { colville: 1, mercer: 1, perkins: 0 };
    const expected = 'Matt Colville';
    const result = evaluateScorecard(scorecard);
    assert.equal(result, expected);
});

test('tie for greatest between mercer and perkins, return colville', function(assert) {
    const scorecard = { colville: 1, mercer: 0, perkins: 1 };
    const expected = 'Matt Colville';
    const result = evaluateScorecard(scorecard);
    assert.equal(result, expected);
});