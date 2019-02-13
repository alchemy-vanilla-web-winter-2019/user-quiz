import scoreFlavorsQuestion from './score-flavors.js';
import evaluateScorecard from './scorecard.js';

function quizResult(answers) {
    const scorecard = { iceCream: 0, brownie: 0, sorbet: 0, tiramisu: 0 };
    scoreFlavorsQuestion(answers.flavor, scorecard);
    const result = evaluateScorecard(scorecard);

    return result;
}

export default quizResult;