const test = QUnit.test; 

QUnit.module('test the rate of the scorecard');

function rateScorecard(scorecard) {
    const Gryffindor = scorecard.Gryffindor;
    const Slytherin = scorecard.Slytherin;
    const Hufflepuff = scorecard.Hufflepuff;
    const Ravenclaw = scorecard.Ravenclaw;

    if(Gryffindor > Hufflepuff && Gryffindor > Slytherin && Gryffindor > Ravenclaw) {
        return 'Gryffindor';
    }
    if(Slytherin > Gryffindor && Slytherin > Ravenclaw && Slytherin > Hufflepuff) {
        return 'Slytherin';
    }
    if(Hufflepuff > Gryffindor && Hufflepuff > Slytherin && Hufflepuff > Ravenclaw) {
        return 'Hufflepuff';
    }
    if(Ravenclaw > Gryffindor && Ravenclaw > Slytherin && Ravenclaw > Hufflepuff) {
        return 'Ravenclaw';
    }
}

test('if doe is the highest value return Gryffindor', function(assert) {
    const result = rateScorecard({ Gryffindor: 1, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 0 });
    assert.deepEqual(result, 'Gryffindor'); 
});

test('if snake is the highest value return Slytherin', function(assert) {
    const result = rateScorecard({ Gryffindor: 0, Slytherin: 1, Hufflepuff: 0, Ravenclaw: 0 });
    assert.deepEqual(result, 'Slytherin');
});

test('if badger is the highest value return Hufflepuff', function(assert) {
    const result = rateScorecard({ Gryffindor: 0, Slytherin: 0, Hufflepuff: 1, Ravenclaw: 0 });
    assert.deepEqual(result, 'Hufflepuff');
});

test('if eagle is the highest value return Ravenclaw', function(assert) {
    const result = rateScorecard({ Gryffindor: 0, Slytherin: 0, Hufflepuff: 0, Ravenclaw: 1 });
    assert.deepEqual(result, 'Ravenclaw');
});