import determineTopColor from '../../src/determine-top-color/determine-top-color.js';

const test = QUnit.test;

QUnit.module('determine top-scoring color:');

test('returns RED when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 1, blue: 0, purple: 0, black: 0, yellow: 0, green: 0 });
    assert.deepEqual(result, 'red');
});

test('returns BLUE when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 0, blue: 1, purple: 0, black: 0, yellow: 0, green: 0 });
    assert.deepEqual(result, 'blue');
});

test('returns PURPLE when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 0, blue: 0, purple: 1, black: 0, yellow: 0, green: 0 });
    assert.deepEqual(result, 'purple');
});

test('returns BLACK when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 0, blue: 0, purple: 0, black: 1, yellow: 0, green: 0 });
    assert.deepEqual(result, 'black');
});

test('returns YELLOW when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 0, blue: 0, purple: 0, black: 0, yellow: 1, green: 0 });
    assert.deepEqual(result, 'yellow');
});

test('returns GREEN when it is the greatest value:', function(assert) {
    const result = determineTopColor({ red: 0, blue: 0, purple: 0, black: 0, yellow: 0, green: 1 });
    assert.deepEqual(result, 'green');
});






