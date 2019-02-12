QUnit.module('evaluate score');
import evaluateScorecard from '../../src/results-calculate/scorecard.js';
const test = QUnit.test;

test('if vanilla ice cream has highest value, return vanilla ice cream', function(assert) {
    const result = evaluateScorecard({ iceCream: 10, brownie: 0, sorbet: 0, tiramisu: 0 });
    assert.equal(result, 'Vanilla ice cream');
});

test('if brownie has the highest value, return brownie', function(assert) {
    const result = evaluateScorecard({ iceCream: 0, brownie: 10, sorbet: 0, tiramisu: 0 });
    assert.equal(result, 'Brownie');
});

test('if sorbet has highest value, return sorbet', function(assert) {
    const result = evaluateScorecard({ iceCream: 0, brownie: 0, sorbet: 10, tiramisu: 0 });
    assert.equal(result, 'Sorbet');
});

test('if tiramisu has the highest value, return tiramisu', function(assert) {
    const result = evaluateScorecard({ iceCream: 0, brownie: 0, sorbet: 0, tiramisu: 10 });
    assert.equal(result, 'Tiramisu');
});