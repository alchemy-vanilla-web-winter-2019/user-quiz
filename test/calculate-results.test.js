
const test = QUnit.test;

import wordCheck from '../src/word-score.js';
import familyCheck from '../src/family-check.js';
import inspireCheck from '../src/inspire-check.js';
import rateScorecard from '../src/rate-scorecard.js';


 



test('if female trouble has the highest score, return female trouble', function(assert){
    const answers = { self:'rebellious', motivation: 'fame', family: 'care-not'
    }; 
    const expected = 'female trouble';
    const result = 'female trouble'
     
    assert.equal(result, expected);

}); 

test('if polyester has the highest score, then return polyester', function(assert){
    const answers = {
        word: 'friendly', motivation: 'harmony', family: 'oppressive'
    };
    const expected = 'polyester';
    const result = 'polyester';

    assert.equal(result, expected)
});

test('if hairspray hae the highest score, return hairspray', function(assert){
    const answers = {
        word: 'activist', motivation: 'dancing', family: 'supportive'
    };
    const expected = 'hairspray';
    const result = 'hairspray';

    assert.equal(result, expected);
});