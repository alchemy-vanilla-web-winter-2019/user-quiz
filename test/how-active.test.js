import calculateHowActive from '../src/how-active.js';
const test = QUnit.test;
//if you want to add more professions, then you can increase your range so that you can split the range up into more sections and then associate those sections with more jobs. 


QUnit.module('how-active test');

let usersScores = null;
QUnit.testStart(function() {
    usersScores = { researcher: 0, professionalAthlete: 0 };
});

test('if howActive <= 5, increment research by 1', function(assert) {
    calculateHowActive('5', usersScores);
    assert.deepEqual(usersScores, { researcher: 1, professionalAthlete: 0 });
});

test('if howActive > 5, increment usersScores.athlete by 1', function(assert) {
    calculateHowActive('6', usersScores);
    assert.deepEqual(usersScores, { researcher: 0, professionalAthlete: 1 });
});