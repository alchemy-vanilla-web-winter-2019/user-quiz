import wordCheck from './word-check.js';
import colorCheck from './color-check.js';
import moneyCheck from './money-check.js';
import animalCheck from './animal-check.js';
import rateScorecard from './rate-scorecard.js';

function calculateResult(answers) {
    const scorecard = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
    wordCheck(answers.word, scorecard);
    colorCheck(answers.color, scorecard);
    moneyCheck(answers.money, scorecard);
    animalCheck(answers.scorecard);
    const result = rateScorecard(scorecard);

    return result;
}

export default calculateResult;