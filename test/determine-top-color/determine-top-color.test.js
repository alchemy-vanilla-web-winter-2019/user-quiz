import determineTopColor from '../../src/determine-top-color/determine-top-color.js';

let test = QUnit.test;

QUnit.module('determine top-scoring color:');

test('returns RED when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 1, blue: 0, purple: 0, black: 0, yellow: 0, green: 0 });
    assert.deepEqual(result, 'red');
});