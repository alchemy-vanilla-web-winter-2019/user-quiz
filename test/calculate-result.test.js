import foodScore from '../src/results/calculations/foodScore.js';
import rateScorecard from '../src/results/calculations/rateScorecard.js';
import colorScore from '../src/results/calculations/colorScore.js';

const test = QUnit.test;

QUnit.module('calculate result');

function calculateResult(answers) {
    const scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
    foodScore(answers.food, scorecard);
    colorScore(answers.color, scorecard);
    const testResult = rateScorecard(scorecard);
    return testResult;
} 


test('write a test', function(assert) {
    const answers = { food: 'steak' };
    const result = calculateResult(answers);
    const expected = 'Charmander';
    assert.equal(result, expected);

});