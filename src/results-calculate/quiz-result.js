import scoreParkQuestion from '../../src/results-calculate/score-park.js';
import evaluateScorecard from '../../src/results-calculate/scorecard.js';

function quizResult(answers) {
    const scorecard = { leslie: 0, jerry: 0, ben: 0, ann: 0 };
    scoreParkQuestion(answers.park, scorecard);
    const result = evaluateScorecard(scorecard);

    return result;
}

export default quizResult;