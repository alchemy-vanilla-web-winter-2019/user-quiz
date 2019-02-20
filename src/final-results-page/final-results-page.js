import rateScorecard from '../../src/quiz-results/rate-scorecard.js';
import foodScore from '../../src/quiz-results/food-score.js';

// working with answer object which holds the questions for food choice
function finalResult(theAnswerOf) {
    //scorecard object which holds the evaluation of the choices
    const newObjectScorecard = { germanshepard: 0, pug: 0, labradoodle: 0 };
    foodScore(theAnswerOf.food, newObjectScorecard);
    // colorScore(answer.color, scorecard); ---- would be another question
    const finalAnswer = rateScorecard(newObjectScorecard);
    // return rateScorecard(newObjectScorecard); works the same as below 
    return finalAnswer;
}

export default finalResult;