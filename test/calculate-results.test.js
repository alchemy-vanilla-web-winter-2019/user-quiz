
const test = QUnit.test;
 
import calculateResults from '../src/calculate-result.js';

test('if female trouble has the highest score, return female trouble', function(assert){
    const answers = { self:'rebellious', motivation: 'fame', family: 'care-not'
    }; 
    const expected = ' Female Trouble';
    const result = calculateResults(answers);
     
    assert.equal(result, expected);

}); 

test('if polyester has the highest score, then return polyester', function(assert){
    const answers = {
        word: 'friendly', motivation: 'harmony', family: 'oppressive'
    };
    const expected = ' Polyester';
    const result = calculateResults(answers);

    assert.equal(result, expected);
});

test('if hairspray hae the highest score, return hairspray', function(assert){
    const answers = {
        word: 'activist', motivation: 'dancing', family: 'supportive'
    };
    const expected = ' Hairspray';
    const result = calculateResults(answers);

    assert.equal(result, expected);
});