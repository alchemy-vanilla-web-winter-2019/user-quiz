import scorePlayers from '../score-players/score-players.js';
import scoreMovie from '../score-movie/score-movie.js';
import scoreKill from '../score-kill/score-kill.js';
import evaluateScorecard from '../evaluate-scorecard/evaluate-scorecard.js';

function evaluateQuiz(answers) {
    const scorecard = { colville: 0, mercer: 0, perkins: 0 };
    scorePlayers(answers.players, scorecard);
    scoreMovie(answers.movie, scorecard);
    scoreKill(answers.kill, scorecard);
    return evaluateScorecard(scorecard);
}

export default evaluateQuiz;