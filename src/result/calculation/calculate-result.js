import descriptorCheck from './check-descriptor.js';
import checkFriday from './check-friday.js';
import checkSeason from './check-season.js';
import rateScorecard from './rate-scorecard.js';


function calculateResult(answers) {
    let scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
    descriptorCheck(answers.descriptor, scorecard);
    checkFriday(answers.friday, scorecard);
    checkSeason(answers.season, scorecard);

    const result = rateScorecard(scorecard);

    return result;
}

export default calculateResult;