const test = QUnit.test;
import animalCheck from '../src/result/calculate/animal-check.js';

QUnit.module('animal-score');
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
});

let scorecard = null;

test('add 1 to Gryffindor if "lion" is selected', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    const result = animalCheck('lion', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Slytherin if "snake" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, ravenclaw: 0, hufflepuff: 0 };
    const result = animalCheck('snake', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Ravenclaw if "bird" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 1, hufflepuff: 0 };
    const result = animalCheck('bird', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to Hufflepuff if "badger" is selected', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 1 };
    const result = animalCheck('badger', scorecard);
    assert.deepEqual(result, expected);
});