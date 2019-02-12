const test = QUnit.test;

function scoreFlower(flower, scorecard) {
    scorecard.red += 1;
}

test('score flowers: rose', function(assert) {
    //arrange

    const scorecard = { red: 0, blue: 0, yellow: 0 };

    //act

    scoreFlower('rose', scorecard);
    //assert
    assert.deepEqual(scorecard, { red: 1, blue: 0, yellow: 0 });
});