const test = QUnit.test;
let scorecard = {};
QUnit.testStart(function() {
    scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
});

function checkLeisure(activity, scorecard) {
    if(activity === 'running') {
        scorecard.banana += 1;
    }
    if(activity === 'tv') {
        scorecard.blueberry += 1;
    }
    if(activity === 'knitting') {
        scorecard.apple += 1;
    }
    if(activity === 'partying') {
        scorecard.kiwi += 1;
    }

    return scorecard;
}


test('add 1 to banana if running is checked', function(assert) {
    const expected = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const result = checkLeisure('running', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to blueberry if tv is checked', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const result = checkLeisure('tv', scorecard);
    assert.deepEqual(result, expected);
});

test('add 1 to apple if knitting is checked', function(assert) {
    const expected = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const result = checkLeisure('knitting', scorecard);
    assert.deepEqual(result, expected);
});
test('add 1 to kiwi if partying is checked', function(assert) {
    const expected = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const result = checkLeisure('partying', scorecard);
    assert.deepEqual(result, expected);
});