import tally from './tally.js';
import scoreFood from './score-food.js';

function finalResults(answers) {
    const scorecard = { soma: 0, ikumi: 0, akira: 0 };
    scoreFood(answers.food, scorecard);

    const result = tally(scorecard);
    return result;
}

export default finalResults;