import scorePatronus from '../../src/quiz-results/score-patronus/score-patronus.js';
const test = QUnit.test;

QUnit.module('tests for scoring the patronus'); 

let scorecard = null; 

QUnit.testStart(function() {
    scorecard = { Gryffindor: 0, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 0 };
});



test('test the doe input', function(assert){
    //arrange
    //act 
    scorePatronus('doe', scorecard);
    //assert
    assert.deepEqual(scorecard, { Gryffindor: 1, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 0 });
});

test('test the snake input', function(assert){
    //arrange
    //act
    scorePatronus('snake', scorecard);
    //assert
    assert.deepEqual(scorecard, { Gryffindor: 0, Slytherin: 1, Hufflepuff: 0, Ravenclaw: 0 });
});

test('test the badger input', function(assert) {
    //arrange
    //act
    scorePatronus('badger', scorecard);
    //assert
    assert.deepEqual(scorecard, { Gryffindor: 0, Slytherin: 0, Hufflepuff: 1, Ravenclaw: 0 });
});

test('test the eagle input', function(assert) {
    //arrange
    //act
    scorePatronus('eagle', scorecard);
    //assert
    assert.deepEqual(scorecard, { Gryffindor: 0, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 1 });
});