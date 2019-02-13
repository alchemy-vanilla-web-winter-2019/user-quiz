const test = QUnit.test;

import resultCalculate from '../../src/result-calculate.js';




test('if morrison has greatest value, return morrison', function(assert){
    const result = resultCalculate({ morrison: 1, winehouse: 0, hendrix: 0, joplin: 0 });
    assert.equal(result, 'Jim Morrison');
});

test('if winehouse has greatest value, return winehouse', function(assert){
    const result = resultCalculate({ morrison: 0, winehouse: 1, hendrix: 0, joplin: 0 });
    assert.equal(result, 'Amy Winehouse');
});

test('if hendrix has greatest value, return hendrix', function(assert){
    const result = resultCalculate({ morrison: 0, winehouse: 0, hendrix: 1, joplin: 0 });
    assert.equal(result, 'Jimi Hendrix');
});

test('if joplin has greatest value, return joplin', function(assert){
    const result = resultCalculate({ morrison: 0, winehouse: 0, hendrix: 0, joplin: 1 });
    assert.equal(result, 'Janis Joplin');
});