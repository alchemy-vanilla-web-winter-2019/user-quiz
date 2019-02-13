const test = QUnit.test;

import calculateResult from '../src/result/calculate/calculate-result.js';

QUnit.module('calculate-result');

test('if gryffindor has the highest total score, return Gryffindor', function(assert) {
    const answers = { word: 'loyal', color: 'red', animal: 'lion' };
    const expected = 'Gryffindor';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});

test('if slytherin has the highest total score, return Slytherin', function(assert) {
    const answers = { word: 'cunning', color: 'green', animal: 'lion' };
    const expected = 'Slytherin';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});

test('if ravenclaw has the highest total score, return Ravenclaw', function(assert) {
    const answers = { word: 'intelligent', color: 'blue', animal: 'bird' };
    const expected = 'Ravenclaw';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});

test('if hufflepuff has the highest total score, return Hufflepuff', function(assert) {
    const answers = { word: 'determined', color: 'yellow', animal: 'badger' };
    const expected = 'Hufflepuff';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});