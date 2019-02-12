QUnit.module('park score');
const test = QUnit.test;

import scoreParkQuestion from '../../src/results-calculate/score-park.js';

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { leslie: 0, jerry: 0, ben: 0, ann: 0 };
});


test('if user selects water park, increment Jerry by 2, and Ann by 1', function(assert){ 
    scoreParkQuestion('waterpark', scorecard);
    assert.deepEqual(scorecard, { leslie: 0, jerry: 2, ben: 0, ann:1 });
}); 

test('if user selects amusement park, increment leslie by 1, jerry by 1, and ann by 2', function(assert){
    scoreParkQuestion('amusement-park', scorecard);
    assert.deepEqual(scorecard, { leslie: 1, jerry: 1, ben: 0, ann: 2 });
});

test('if user selects national-park, increment leslie by 4, ben by 2', function(assert) {
    scoreParkQuestion('national-park', scorecard);
    assert.deepEqual(scorecard, { leslie: 4, jerry: 0, ben: 2, ann:0 });
});

test('if user selects city-park, increment leslie by 2, ben by 3, and ann by .5', function(assert) {
    scoreParkQuestion('city-park', scorecard);
    assert.deepEqual(scorecard, { leslie: 2, jerry: 0, ben: 3, ann: 0.5 });
});

