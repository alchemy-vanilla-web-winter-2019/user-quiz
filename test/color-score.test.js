const test = QUnit.test;
let scorecard = null;
import colorScore from '../src/results/calculations/color-score.js';

QUnit.module('color score');
QUnit.testStart(function() {
    scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
});




test('test that scorecard reads Charmander 1, Bulbasaur 0, squirtle 0, when "red" is inputted as color', function(assert) {
    const color = 'red';
    const result = colorScore(color, scorecard);
    const expected = { charmander: 1, bulbasaur: 0, squirtle: 0 };
    assert.deepEqual(result, expected);
});
test('test that scorecard reads Charmander 0, Bulbasaur 1, squirtle 0, when "green" is inputted as color', function(assert) {
    const color = 'green';
    const result = colorScore(color, scorecard);
    const expected = { charmander: 0, bulbasaur: 1, squirtle: 0 };
    assert.deepEqual(result, expected);
});
test('test that scorecard reads Charmander 0, Bulbasaur 0, squirtle 1, when "blue" is inputted as color', function(assert) {
    const color = 'blue';
    const result = colorScore(color, scorecard);
    const expected = { charmander: 0, bulbasaur: 0, squirtle: 1 };
    assert.deepEqual(result, expected);
});