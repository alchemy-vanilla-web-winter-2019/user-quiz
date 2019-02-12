const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

function checkAnimal(animal, scorecard) {
    if(animal === 'monkey') {
        scorecard.banana += 1;
    }
    return scorecard;
}

test('if animal equals monkey add 1 to banana', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkAnimal('monkey', scorecard);

    assert.deepEqual(result, expected);
});