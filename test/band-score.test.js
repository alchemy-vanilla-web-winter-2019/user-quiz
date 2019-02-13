const test = QUnit.test;
let scorecard = null;
import bandScore from '../src/results/calculations/band-score.js';
QUnit.module('band score');
QUnit.testStart(function() {
    scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
});


test('test that charmander 1, bulbasaur 0, squirtle 0 is returned from an input of "led-zep"', function(assert) {
    const band = 'led-zep';
    const result = bandScore(band, scorecard);
    const expected = { charmander: 1, bulbasaur: 0, squirtle: 0 };

    assert.deepEqual(result, expected);
});
test('test that charmander 0, bulbasaur 1, squirtle 0 is returned from an input of "the-stones"', function(assert) {
    const band = 'the-stones';
    const result = bandScore(band, scorecard);
    const expected = { charmander: 0, bulbasaur: 1, squirtle: 0 };

    assert.deepEqual(result, expected);
});
test('test that charmander 0, bulbasaur 0, squirtle 1 is returned from an input of "the-stones"', function(assert) {
    const band = 'the-beatles';
    const result = bandScore(band, scorecard);
    const expected = { charmander: 0, bulbasaur: 0, squirtle: 1 };

    assert.deepEqual(result, expected);
});