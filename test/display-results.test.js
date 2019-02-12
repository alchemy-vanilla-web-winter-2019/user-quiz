const test = QUnit.test;
import checkColor from '../src/eval/calculate/check-color.js';
import checkAnimal from '../src/eval/calculate/check-animal.js';
import checkMovie from '../src/eval/calculate/check-movie.js';
import rateScorecard from '../src/eval/calculate/rate-scorecard.js';


function displayResults(answers) {
    let scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };

    checkColor(answers.color, scorecard);
    checkAnimal(answers.animal, scorecard);
    checkMovie(answers.movie, scorecard);
    const result = rateScorecard(scorecard);
    return result;

}

test('if apple has the highest score return apple', function(assert) {
    const answers = { color: 'red', animal: 'horse', movie: 'saw' };
    const expected = 'apple';
    const result = displayResults(answers);

    assert.equal(result, expected);
});

test('if banana has the highest score return banana', function(assert) {
    const answers = { color: 'yellow', animal: 'monkey', movie: 'saw' };
    const expected = 'banana';
    const result = displayResults(answers);

    assert.equal(result, expected);
});

test('if kiwi has the highest score return kiwi', function(assert) {
    const answers = { color: 'green', animal: 'pig', movie: 'saw' };
    const expected = 'kiwi';
    const result = displayResults(answers);

    assert.equal(result, expected);
});

test('if blueberry has the highest score return blueberry', function(assert) {
    const answers = { color: 'blue', animal: 'crow', movie: 'saw' };
    const expected = 'blueberry';
    const result = displayResults(answers);

    assert.equal(result, expected);
});