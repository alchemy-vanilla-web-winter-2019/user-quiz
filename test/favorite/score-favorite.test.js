import scoreFavorite from '../../src/calculate-results/favorite/score-favorite.js';
const test = QUnit.test;

QUnit.module('scoring the favorite');

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { ocean: 0, sun: 0, grass: 0 };
});

test('Ocean is selected as favorite', function(assert){
    scoreFavorite('ocean', scorecard);
    assert.deepEqual(scorecard, { ocean: 1, sun: 0, grass: 0 });
});

