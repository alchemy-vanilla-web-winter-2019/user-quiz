const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function(){
    scorecard = { morrison: 0, winehouse: 0, hendrix: 0, joplin: 0 };
});

import scorePoison from "../../src/poison-score.js";

 
test('if peyote selected, increment morrison by 1', function(assert){
    scorePoison('peyote', scorecard);
    assert.deepEqual(scorecard, { morrison: 1, winehouse: 0, hendrix: 0, joplin: 0 });
});
test('if burbon selected, increment winehouse by 1', function(assert){
    scorePoison('burbon', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 1, hendrix: 0, joplin: 0 });
});
test('if barbituates selected, increment hendrix by 1', function(assert){
    scorePoison('barbituates', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 0, hendrix: 1, joplin: 0 });
});
test('if opiates selected, increment hendrix by 1', function(assert){
    scorePoison('opiates', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 0, hendrix: 0, joplin: 1 });
});



