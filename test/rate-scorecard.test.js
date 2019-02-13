const test = QUnit.test;

let scorecard = null;

import rateScorecard from '../src/rate-scorecard.js'


test('returns female trouble if score is high', function(assert){
    const scorecard = { femaleTrouble: 1, polyester: 0, hairspray: 0,  };
    const result = rateScorecard(scorecard);
    const expected = 'female trouble';

    assert.deepEqual(result, expected);
});


test('returns polyester if score is high', function(assert){
    const scorecard = { femaleTrouble: 0, polyester: 1, hairspray: 0,  };
    const result = rateScorecard(scorecard);
    const expected = 'polyester';

    assert.deepEqual(result, expected);
});

test('returns hairspray if score is high', function(assert){
    const scorecard = { femaleTrouble: 0, polyester: 0, hairspray: 1,  };
    const result = rateScorecard(scorecard);
    const expected = 'hairspray';

    assert.deepEqual(result, expected);
});