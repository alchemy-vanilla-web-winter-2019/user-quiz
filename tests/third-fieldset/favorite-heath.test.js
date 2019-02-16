const test = QUnit.test;
import bestHeath from '../../src/favorite-heath/favorite-heath.js'

let scorecard = null;

QUnit.module('scoring the third fieldset');

QUnit.testStart(function(){
    scorecard = { melancholic: 0, euphoric: 0, enraged: 0 };
});

test('test for "melancholic" being chosen as favorite', function(assert){
    bestHeath('melancholic', scorecard);

    assert.deepEqual(scorecard, { melancholic: .7, euphoric: 0, enraged: 0 });
});

test('test for "euphoric" being chosen as favorite', function(assert){
    bestHeath('euphoric', scorecard);

    assert.deepEqual(scorecard, { melancholic: 0, euphoric: .5, enraged: 0 });
});

test('test for "enraged" being chosen as favorite', function(assert){
    bestHeath('enraged', scorecard);

    assert.deepEqual(scorecard, { melancholic: 0, euphoric: 0, enraged: 0.6 });
});