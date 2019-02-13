const test = QUnit.test;
import jankenScore from '../src/results/calculations/janken-score.js';
QUnit.module('janken test');
let scorecard = null;
QUnit.testStart(function() {
    scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
});



test('make a function that returns charmander 1, bulbasaur 0, and squirtle 0, when scissors is inputted', function(assert) {
    const janken = 'scissors';
    const result = jankenScore(janken, scorecard);
    const expected = { charmander: 1, bulbasaur: 0, squirtle: 0 };

    assert.deepEqual(result, expected);
});
test('make a function that returns charmander 0, bulbasaur 1, and squirtle 0, when scissors is inputted', function(assert) {
    const janken = 'paper';
    const result = jankenScore(janken, scorecard);
    const expected = { charmander: 0, bulbasaur: 1, squirtle: 0 };

    assert.deepEqual(result, expected);
});
test('make a function that returns charmander 0, bulbasaur 0, and squirtle 1, when scissors is inputted', function(assert) {
    const janken = 'rock';
    const result = jankenScore(janken, scorecard);
    const expected = { charmander: 0, bulbasaur: 0, squirtle: 1 };

    assert.deepEqual(result, expected);
});