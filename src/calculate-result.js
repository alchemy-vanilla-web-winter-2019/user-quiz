import wordCheck from './word-score.js';
import inspireCheck from './inspire-check.js';
import familyCheck from './family-check.js';
import rateScorecard from './rate-scorecard.js';


function calculateResults(answers){
    const scorecard = {femaleTrouble: 0, polyester: 0, hairspray: 0};
    
     wordCheck(answers.word.scorecard);
     inspireCheck(answers. motivation.scorecard);
     familyCheck(answers.environment.scorecard);
     const result = rateScorecard(scorecard);
     return result;
}

export default calculateResults;