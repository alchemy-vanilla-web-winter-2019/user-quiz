import calculateResult from '../src/results/calculations/calculate-results.js';





const test = QUnit.test;
QUnit.module('calculate result');
const bulb = ['salad', 'green', 'the-stones', 'paper'];
const char = ['steak', 'red', 'led-zep', 'scissors'];
const squirt = ['sushi', 'blue', 'the-beatles', 'rock'];

test('given 4 answers from the char array, returns charmander', function(assert) {

    const answers = { food: char[0], color: char[1], band: char[2], janken: char[3] };
    const result = calculateResult(answers);
    const expected = 'Charmander';
    assert.equal(result, expected);
});
test('given 4 answers from the bulb array, returns bulbasaur', function(assert) {
    const answers = { food: bulb[0], color: bulb[1], band: bulb[2], janken: bulb[3] };
    const result = calculateResult(answers);
    const expected = 'Bulbasaur';
    assert.equal(result, expected);
});
test('given 4 answers from the squirt array, returns Squirtle', function(assert) {
    const answers = { food: squirt[0], color: squirt[1], band: squirt[2], janken: squirt[3] };
    const result = calculateResult(answers);
    const expected = 'Squirtle';
    assert.equal(result, expected);
});
test('given one answers from each array, plus one from the squirt array, returns Squirtle', function(assert) {
    const answers = { food: squirt[0], color: char[1], band: bulb[2], janken: squirt[3] };
    const result = calculateResult(answers);
    const expected = 'Squirtle';
    assert.equal(result, expected);
});
test('given one answers from each array, plus one from the bulb array, returns Bulbasaur', function(assert) {
    const answers = { food: squirt[0], color: char[1], band: bulb[2], janken: bulb[3] };
    const result = calculateResult(answers);
    const expected = 'Bulbasaur';
    assert.equal(result, expected);
});
test('given one answers from each array, plus one from the char array, returns Charmander', function(assert) {
    const answers = { food: squirt[0], color: char[1], band: char[2], janken: bulb[3] };
    const result = calculateResult(answers);
    const expected = 'Charmander';
    assert.equal(result, expected);
});
test('given two answers from charmander and bulbasaur respectively, returns Pikachu', function(assert){
    const answers = { food: char[0], color: char[1], band: bulb[2], janken: bulb[3] };
    const result = calculateResult(answers);
    const expected = 'Pikachu';
    assert.equal(result, expected);
});
test('given two answers from charmander and squirtle respectively, returns Pikachu', function(assert){
    const answers = { food: char[0], color: char[1], band: squirt[2], janken: squirt[3] };
    const result = calculateResult(answers);
    const expected = 'Pikachu';
    assert.equal(result, expected);
});