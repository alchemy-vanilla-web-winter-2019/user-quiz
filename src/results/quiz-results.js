import timeScoreCrunch from '../time-score-crunch/time-score-crunch.js';
import determineTopColor from '../determine-top-color/determine-top-color.js';

function quizResults(choices) {
    const scorecard = { red: 0, blue: 0, purple: 0, black: 0, yellow: 0, green: 0 };
    timeScoreCrunch(choices.time, scorecard);
    const result = determineTopColor(scorecard);

    return result;
}

export default quizResults;