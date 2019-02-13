import scoreSong from '../quiz-results/scoreSong.js';
import scoreArtist from '../quiz-results/scoreArtist.js';
import finalizeScorecard from './calculate.js';

const json = window.localStorage.getItem('answers');
const scorecard = JSON.parse(json);

const result = finalizeScorecard(scorecard);

const finalResult = document.getElementById('finalresult');

finalResult.textContent = result;

