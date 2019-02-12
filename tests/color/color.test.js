const test = QUnit.test;

import scoreColor from '../../src/color-score.js';



let scorecard = null;
QUnit.testStart(function(){
    scorecard = { morrison: 0, winehouse: 0, hendrix: 0, joplin: 0 };
});

test('if color is black increment winehouse', function(assert){
    scoreColor('black', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 1, hendrix: 0, joplin: 0 });
});
test('if color is purple increment hendrix', function(assert){
    scoreColor('purple', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 0, hendrix: 1, joplin: 0 });
});
test('if color is green increment morrison', function(assert){
    scoreColor('green', scorecard);
    assert.deepEqual(scorecard, { morrison: 1, winehouse: 0, hendrix: 0, joplin: 0 });
});
test('if color is tv increment hendrix', function(assert){
    scoreColor('tv', scorecard);
    assert.deepEqual(scorecard, { morrison: 0, winehouse: 0, hendrix: 0, joplin: 1 });
});