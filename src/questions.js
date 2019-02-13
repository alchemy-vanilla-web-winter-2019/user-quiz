import scoreLoot from "./question/score-loot.js";
import tallyScorecard from "./result/tally-scorecard.js";
import scoreEnemy from "./question/score-enemy.js";
import pullPlayer from "./pull-player.js";
const questionForm = document.getElementById('question-form');
pullPlayer();

questionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const scorecard = { wizard: 0, fighter: 0, archer: 0 };

  const formData = new FormData(questionForm);
  const answers = {
    loot: formData.get('loot'),
    enemy: formData.get('enemy')
  };
  
  scoreLoot(answers.loot, scorecard);
  scoreEnemy(answers.enemy, scorecard);
  const result = tallyScorecard(scorecard);
  const resultURL = './result.html?result=' + encodeURIComponent(result);

  window.location = resultURL;
});