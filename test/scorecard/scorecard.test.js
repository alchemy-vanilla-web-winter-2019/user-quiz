const test = QUnit.test;
QUnit.module('evaluate scorecard');

import evaluateScoreCard from '../../src/results-calculate/scorecard.js';

test('if leslie has the highest value, return leslie', function(assert){
    const result = evaluateScoreCard({ leslie: 10, jerry: 0, ben: 0, ann: 0 });
    assert.equal(result, 'leslie');
});

test('if jerry has the highest value, return jerry', function(assert){
    const result = evaluateScoreCard({ leslie: 0, jerry: 10, ben: 0, ann: 0 });
    assert.equal(result, 'jerry');
});

test('if ben has the highest value, return ben', function(assert){
    const result = evaluateScoreCard({ leslie: 0, jerry: 0, ben: 10, ann: 0 });
    assert.equal(result, 'ben');
});

test('if ann has the highest value, return ann', function(assert) {
    const result = evaluateScoreCard({ leslie: 0, jerry: 0, ben: 0, ann: 10 });
    assert.equal(result, 'ann');
});