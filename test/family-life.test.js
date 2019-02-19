const test = QUnit.test;
import familyCheck from '..//src/family-check.js';

QUnit.testStart(function() {
    scorecard = { femaleTrouble: 0, polyester: 0, hairspray: 0 };
});
let scorecard = null;


test('add one to female trouble if care not is chosen', function(assert) {
    const expect = { femaleTrouble: 1, polyester: 0, hairspray: 0 };
    const result = familyCheck('care-not', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to hairspray if supportive is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 0, hairspray: 1 };
    const result = familyCheck('supportive', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to polyester if oppressive is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 1, hairspray: 0 };
    const result = familyCheck('oppressive', scorecard);
    assert.deepEqual(result, expect);
});
