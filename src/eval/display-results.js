import checkColor from '../eval/calculate/check-color.js';
import checkAnimal from '../eval/calculate/check-animal.js';
import checkMovie from '../eval/calculate/check-movie.js';
import rateScorecard from '../eval/calculate/rate-scorecard.js';
import checkCurse from './calculate/check-curse.js';
import checkDessert from './calculate/check-dessert.js';
import checkLeisure from './calculate/check-leisure.js';
import checkRelationship from './calculate/check-relationship.js';
import checkTransportation from './calculate/check-transportation.js';
import checkVacation from './calculate/check-vacation.js';

function displayResults(answers) {
    let scorecard = { apple: 0, banana: 0, blueberry: 0, kiwi: 0 };
    checkAnimal(answers.animal, scorecard);
    checkColor(answers.color, scorecard);
    checkCurse(answers.curse, scorecard);
    checkDessert(answers.dessert, scorecard);
    checkLeisure(answers.leisure, scorecard);
    checkMovie(answers.movie, scorecard);
    checkRelationship(answers.relationship, scorecard);
    checkTransportation(answers.transportation, scorecard);
    checkVacation(answers.vacation, scorecard);
    const result = rateScorecard(scorecard);
    return result;
}

export default displayResults;