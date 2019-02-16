const test = QUnit.test;
import inspireCheck from '../src/inspire-check.js';

QUnit.testStart(function() {
     scorecard = { femaleTrouble: 0, polyester: 0, hairspray: 0 };
});
let scorecard = null;


test('add one to female trouble if fame is chosen', function(assert) {
    const expect = { femaleTrouble: 1, polyester: 0, hairspray: 0 };
    const result = inspireCheck('fame', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to hairspray if dancing is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 0, hairspray: 1 };
    const result = inspireCheck('dancing', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to polyester if harmony is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 1, hairspray: 0 };
    const result = inspireCheck('harmony', scorecard);
    assert.deepEqual(result, expect);
});
