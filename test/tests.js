const test = QUnit.test;

let scorecard = null;

scorecard = {
    green: 0,
    yellow: 0
};

function scoreChoice() {
    // if(choice === 'sun') {
    return { green: 0, yellow: 1 };
    // }
}

test('Choice of "sun" scores appropriately', function(assert) {
    const choice = 'sun';
    let result = scoreChoice(choice, scorecard);
    let expectedResult = { green: 0, yellow: 1 };
    assert.deepEqual(result, expectedResult);
    console.log(scorecard);
    
});

test('Choice of "grass" scores appropriately', function(assert) {
    const choice = 'grass';
    let result = scoreChoice(choice, scorecard);
    let expectedResult = { green: 1, yellow: 0 };
    assert.deepEqual(result, expectedResult);
});




