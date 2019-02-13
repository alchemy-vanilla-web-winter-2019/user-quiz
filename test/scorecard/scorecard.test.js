QUnit.module('evaluate scorecard');
const test = QUnit.test;
import evaluateScorecard from '../../src/results-calculate/scorecard.js';

test('if Leslie has the highest value, return Leslie', function(assert) {
    const result = evaluateScorecard({ leslie: 10, jerry: 0, ben: 0, ann: 0 });
    assert.equal(result, 'leslie');
});

test('if Jerry has the highest value, return Jerry', function(assert) {
    const result = evaluateScorecard({ leslie: 0, jerry: 10, ben: 0, ann: 0 });
    assert.equal(result, 'jerry');
});

test('if ben has the highest value, return Ben', function(assert) {
    const result = evaluateScorecard({ leslie: 0, jerry: 0, ben: 10, ann: 0 });
    assert.equal(result, 'ben');
});

test('if ann has the highest value, return ann', function(assert) {
    const result = evaluateScorecard({ leslie: 0, jerry: 0, ben: 0, ann: 10 });
    assert.equal(result, 'ann');
});