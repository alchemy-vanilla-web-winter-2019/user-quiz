import scoreAccessory from "../../src/accessory-score.js";

const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function(){
    scorecard = { morrison: 0, winehouse: 0, hendrix: 0, joplin: 0 };
});



test('if flowers selected increment joplin', function(assert){
    scoreAccessory('flowers', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 0, hendrix: 0, joplin: 1 });
});
test('if leather pants selected increment morrison', function(assert){
    scoreAccessory('leather-pants', scorecard);
    assert.deepEqual(scorecard, { morrison: 1, winehouse: 0, hendrix: 0, joplin: 0 });
});
test('if eyeliner selected increment winehouse', function(assert){
    scoreAccessory('eyeliner', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 1, hendrix: 0, joplin: 0 });
});
test('if scarf selected increment hendrix', function(assert){
    scoreAccessory('scarf', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 0, hendrix: 1, joplin: 0 });
});