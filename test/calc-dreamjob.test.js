import calculateDreamJob from '../src/calc-dreamjob.js';
const test = QUnit.test;



QUnit.module('calculating user\'s scores');

test('if usersScores.researcher > usersScores.professionalAthlete, return "your dream job is RESEARCHER!"', function(assert) {

    const results = calculateDreamJob({ researcher: 1, professionalAthlete: 0 });
    assert.equal(results, 'You\'re dream job is a researcher!!');
});

test('if usersScores.professionalAthlete > usersScores.researcher, retun athlete', function(assert) {
    const results = calculateDreamJob({ researcher: 0, professionalAthlete: 1 });
    assert.equal(results, 'You\'re dream job is professional athlete!!');
});