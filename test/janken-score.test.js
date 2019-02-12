const test = QUnit.test;
QUnit.module('janken test');
QUnit.testStart(function() {
    let scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
});

function jankenScore(janken, scorecard) {
    if(janken === 'scissors') {
        scorecard.charmander += 1;
    }
    return scorecard;
}

test('make a function that returns charmander 1, bulbasaur 0, and squirtle 0, when scissors is inputted', function(assert) {
    const janken = 'scissors';
    const result = jankenScore(janken, scorecard);
    const expected = { charmander: 0, bulbasaur: 0, squirtle: 0 };

    assert.deepEqual(result, expected);
});