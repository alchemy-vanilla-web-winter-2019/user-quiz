import finalResults from '../../src/questions/final-results.js';
const test = QUnit.test;

QUnit.module('final reaults');

test('tally final results', function(assert) {
    const answers = {
        food: 'Japanese',
    };
    const result = finalResults(answers);
    assert.equal(result, 'soma');
});