const test = QUnit.test; //1

//4
QUnit.testStart(function() {
     scorecard = { femaleTrouble: 0, polyester: 0, hairspray: 0 };

});
let scorecard = null;//2
//5
function familyCheck(inspire, scorecard) {
    if(inspire === 'oppressive') {
        scorecard.femaleTrouble += 1;
        return scorecard;
    }
    if(inspire === 'supportive') {
        scorecard.hairspray += 1;
        return scorecard;
    }
    if(inspire === 'care-not') {
        scorecard.polyester += 1;
        return scorecard;
    }


}
//3
test('add one to female trouble if oppressive is chosen', function(assert) {
    const expect = { femaleTrouble: 1, polyester: 0, hairspray: 0 };
    const result = familyCheck('oppressive', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to hairspray if supportive is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 0, hairspray: 1 };
    const result = familyCheck('supportive', scorecard);
    assert.deepEqual(result, expect);
});

test('add one to polyester if care-not is chosen', function(assert) {
    const expect = { femaleTrouble: 0, polyester: 1, hairspray: 0 };
    const result = familyCheck('care-not', scorecard);
    assert.deepEqual(result, expect);
});
