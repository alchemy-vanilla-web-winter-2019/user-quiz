QUnit.module('flavors score');

const test = QUnit.test;

let scorecard = null;
import scoreFlavorsQuestion from '../../src/results-calculate/score-flavors.js';
QUnit.testStart(function() {
    scorecard = { iceCream: 0, brownie: 0, sorbet: 0, tiramisu: 0 };
});

test('if user selects vanilla, increment vanilla ice cream by 4', function(assert) {
    scoreFlavorsQuestion('vanilla', scorecard);
    assert.deepEqual(scorecard, { iceCream: 4, brownie: 0, sorbet: 0, tiramisu: 0 });
});


test('if user selects chocolate, increment brownie by 4', function(assert) {
    scoreFlavorsQuestion('chocolate', scorecard);
    assert.deepEqual(scorecard, { iceCream: 0, brownie: 4, sorbet: 0, tiramisu: 1 });
});

test('if user selects fruity, increment sorbet by 4', function(assert) {
    scoreFlavorsQuestion('fruity', scorecard);
    assert.deepEqual(scorecard, { iceCream: 0, brownie: 0, sorbet: 4, tiramisu: 0 });
});

test('if user select spiced, increment tiramisu by 4', function(assert) {
    scoreFlavorsQuestion('spiced', scorecard); 
    assert.deepEqual(scorecard, { iceCream: 0, brownie: 0, sorbet: 0, tiramisu: 4 });
});