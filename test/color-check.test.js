const test = QUnit.test;

let scorecard = [];
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});


function checkColor(color, scorecard) {
    if(color === 'red') {
        scorecard.apple += 1;
    }
    return scorecard;
}

test('if color is red add 1 to scorecard', function(assert) {
    // const color = 'red';
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkColor('red', scorecard);
    
    assert.deepEqual(result, expected);
});