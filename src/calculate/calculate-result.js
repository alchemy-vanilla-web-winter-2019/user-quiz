import rateScorecard from './rate-scorecard.js';
import scoreBudget from './score-budget.js';
import scoreEnvironment from './score-environment.js';

function calculateResult(answer) {
    const scorecard = {
        timberline : 0,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    scoreBudget(answer.budget, scorecard);
    scoreEnvironment(answer.environment, scorecard);
    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResult;