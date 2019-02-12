
const test = QUnit.test;

QUnit.module('rate scorecard'); 
import rateScorecard from '../src/results/calculations/rateScorecard.js';


test('if charmander has a greater scorecard value than bulbasaur and squirtle, return "Charmander"', function(assert) {
    const scorecard = { charmander: 1, bulbasaur: 0, squirtle: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Charmander';
    assert.equal(result, expected);
});
test('if bulbasaur has a greater scorecard value than charmander and squirtle, return "Charmander"', function(assert) {
    const scorecard = { charmander: 0, bulbasaur: 1, squirtle: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Bulbasaur';
    assert.equal(result, expected);
});
test('if squirtle has a greater scorecard value than charmander and bulbasaur return "Charmander"', function(assert) {
    const scorecard = { charmander: 0, bulbasaur: 0, squirtle: 1 };
    const result = rateScorecard(scorecard);
    const expected = 'Squirtle';
    assert.equal(result, expected);
});

