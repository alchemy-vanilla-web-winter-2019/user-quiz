import scorePlayers from '../score-players/score-players.js';
import evaluateScorecard from '../evaluate-scorecard/evaluate-scorecard.js';
import scoreMovie from '../score-movie/score-movie.js';

function evaluateQuiz(answers) {
    const scorecard = { colville: 0, mercer: 0, perkins: 0 };
    scorePlayers(answers.players, scorecard);
    scoreMovie(answers.movie, scorecard);
    return evaluateScorecard(scorecard);
}

export default evaluateQuiz;