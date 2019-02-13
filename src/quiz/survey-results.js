import scoreWealth from './score-wealth.js';
import scoreReligion from './score-religion.js';
import rateScorecard from './rate-scorecard.js';

function surveyResults(answers) {
    const scorecard = { antuniet: 0, barbara: 0, marguerit: 0 };
    scoreWealth(answers.wealth, scorecard);
    scoreReligion(answers.religion, scorecard);
    return rateScorecard(scorecard);
}

export default surveyResults;