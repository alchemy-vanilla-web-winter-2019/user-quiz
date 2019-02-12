import foodScore from './food-score.js';
import rateScorecard from './rate-scorecard.js';
import colorScore from './color-score.js';
import bandScore from './band-score.js';
import jankenScore from './janken-score.js';


function calculateResult(answers) {
    const scorecard = { charmander: 0, bulbasaur: 0, squirtle: 0 };
    foodScore(answers.food, scorecard);
    colorScore(answers.color, scorecard);
    bandScore(answers.band, scorecard);
    jankenScore(answers.janken, scorecard);
    const testResult = rateScorecard(scorecard);
    return testResult;
} 

export default calculateResult;