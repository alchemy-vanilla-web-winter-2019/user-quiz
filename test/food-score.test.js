const test = QUnit.test;
import foodScore from '../src/results/calculations/food-score.js';

let scorecard = null;
QUnit.module('food score');
QUnit.testStart(function() {
    scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
});



test('test that increases scorecard.charmander by one when steak is inputted', function(assert) {
    const food = 'steak';
    const results = foodScore(food, scorecard);
    const expected = { charmander: 1, bulbasaur: 0, squirtle: 0 };

    assert.deepEqual(results, expected);
});
test('test that increases scorecard.bulbasaur by one when salad is inputted', function(assert) {
    const food = 'salad';
    const results = foodScore(food, scorecard);
    const expected = { charmander: 0, bulbasaur: 1, squirtle: 0 };

    assert.deepEqual(results, expected);
});
test('test that increases scorecard.squirtle by one when sushi is inputted', function(assert) {
    const food = 'sushi';
    const results = foodScore(food, scorecard);
    const expected = { charmander: 0, bulbasaur: 0, squirtle: 1 };
    assert.deepEqual(results, expected);
});