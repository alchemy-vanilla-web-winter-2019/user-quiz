import wordCheck from '../src/word-score.js';

const test = QUnit.test; 


QUnit.testStart(function() {
    scorecard = { femaleTrouble: 0, polyester: 0, hairspray: 0 };

});
let scorecard = null;

 

test('add one to female trouble if rebellious is chosen', function(assert) {
    const expect = { femaleTrouble: 1, polyester: 0, hairspray: 0 };
    const result = wordCheck('rebellious', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to hairspray if activist is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 0, hairspray: 1 };
    const result = wordCheck('activist', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to polyester if friendly is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 1, hairspray: 0 };
    const result = wordCheck('friendly', scorecard);
    assert.deepEqual(result, expect);
});