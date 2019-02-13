import finalizeScorecard from '../../src/results/calculate.js';
const test = QUnit.test;
QUnit.module('scorecard eval');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { bluegrass: 0, pop: 0, hiphop: 0 };
});


test('if bluegrass is highest value, display bluegrass', function(assert){
    const result = finalizeScorecard({ bluegrass: 1, pop: 0, hiphop:0 });

    assert.deepEqual(result, 'bluegrass');
});

test('if pop is highest value, display pop', function(assert){
    const result = finalizeScorecard({ bluegrass: 0, pop: 1, hiphop:0 });

    assert.deepEqual(result, 'pop');
});

test('if hiphop is highest value, display hippop', function(assert){
    const result = finalizeScorecard({ bluegrass: 0, pop: 0, hiphop:1 });

    assert.deepEqual(result, 'hiphop');
});