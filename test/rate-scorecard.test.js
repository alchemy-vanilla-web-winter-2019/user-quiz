const test = QUnit.test;
import rateScorecard from '../src/result/calculate/rate-scorecard.js';

QUnit.module('rate-scorecard');

test('if answer.gryffindor is highest, then return Gryffindor', function(assert) {
    const scorecard = { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    const expected = 'Gryffindor';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});

test('if answer.slytherin is highest, then return Slytherin', function(assert) {
    const scorecard = { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 0 };
    const expected = 'Slytherin';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});

test('if answer.ravenclaw is highest, then return Ravenclaw', function(assert) {
    const scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 1, hufflepuff: 0 };
    const expected = 'Ravenclaw';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});

test('if answer.hufflepuff is highest, then return Hufflepuff', function(assert) {
    const scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 1 };
    const expected = 'Hufflepuff';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});