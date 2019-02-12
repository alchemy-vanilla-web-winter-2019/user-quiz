const test = QUnit.test;

function rateScorecard(answers) {
    const apple = answers.apple;
    const banana = answers.banana;
    const kiwi = answers.kiwi;
    const blueberry = answers.blueberry;
    if(apple > banana && apple > kiwi && apple > blueberry) {
        return 'apple';
    }
    if(banana > apple && banana > kiwi && banana > blueberry) {
        return 'banana';
    }
    if(kiwi > banana && kiwi > apple && kiwi > blueberry) {
        return 'kiwi';
    }
    if(blueberry > banana && blueberry > kiwi && blueberry > apple) {
        return 'blueberry';
    }
    else {
        return 'vegetable';
    }
}

test('if apple is highest score return apple', function(assert) {
    const answers = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };
    const expected = 'apple';
    const result = rateScorecard(answers);

    assert.equal(result, expected);
});

test('if banana is highest score return banana', function(assert) {
    const answers = { apple: 0, banana: 1, blueberry: 0, kiwi: 0 };
    const expected = 'banana';
    const result = rateScorecard(answers);

    assert.equal(result, expected);
});

test('if kiwi is highest score return kiwi', function(assert) {
    const answers = { apple: 0, banana: 0, blueberry: 0, kiwi: 1 };
    const expected = 'kiwi';
    const result = rateScorecard(answers);

    assert.equal(result, expected);
});

test('if blueberry is highest score return blueberry', function(assert) {
    const answers = { apple: 0, banana: 0, blueberry: 1, kiwi: 0 };
    const expected = 'blueberry';
    const result = rateScorecard(answers);

    assert.equal(result, expected);
});