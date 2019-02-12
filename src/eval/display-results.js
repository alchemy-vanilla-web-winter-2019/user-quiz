import checkColor from '../eval/calculate/check-color.js';
import checkAnimal from '../eval/calculate/check-animal.js';
import checkMovie from '../eval/calculate/check-movie.js';
import rateScorecard from '../eval/calculate/rate-scorecard.js';

function displayResults(answers) {
    let scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };

    checkColor(answers.color, scorecard);
    checkAnimal(answers.animal, scorecard);
    checkMovie(answers.movie, scorecard);
    const result = rateScorecard(scorecard);
    return result;

}

export default displayResults;