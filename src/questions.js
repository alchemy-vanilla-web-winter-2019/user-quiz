import scoreLoot from "./question/score-loot.js";
import tallyScorecard from "./result/tally-scorecard.js";

const questionForm = document.getElementById('question-form');

questionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const scorecard = { wizard: 0, fighter: 0, archer: 0 };

  const formData = new FormData(questionForm);
  const answers = {
    loot: formData.get('loot')
  };
  
  scoreLoot(answers.loot, scorecard);
  const result = tallyScorecard(scorecard);
  const resultURL = './result.html?result=' + encodeURIComponent(result);
  window.location = resultURL;
});