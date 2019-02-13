import scoreSong from '../quiz-results/scoreSong.js';
import scoreArtist from '../quiz-results/scoreArtist.js';
import finalizeScorecard from './calculate.js';

function surveyResults(answers) {
    const scorecard = {
        bluegrass: 0,
        pop: 0,
        hiphop: 0,
    };
    scoreSong(answers.song, scorecard);
    scoreArtist(answers.artist, scorecard);
    return finalizeScorecard(scorecard);

}

export default surveyResults;

