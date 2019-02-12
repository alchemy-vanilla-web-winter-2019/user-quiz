// import scoreBudget from '../src/calculate/score-budget.js';
// import scoreEnvironment from '../src/calculate/score-environment.js';

const test = QUnit.test;

function rateScorecard(scorecard) {
    const timberline = scorecard.timberline;
    const hawaii = scorecard.hawaii;
    const nyc = scorecard.nyc;
    const cabin = scorecard.cabin;
    const thailand = scorecard.thailand;
    const hanoi = scorecard.hanoi;

    if(timberline > hawaii && timberline > nyc && timberline > cabin && timberline > thailand && timberline > hanoi) {
        return 'Timberline Lodge';
    }
}

test('if timberline has the highest score, return Timberline Lodge', function(assert) {
    const expected = 'Timberline Lodge';
    const scorecard = {
        timberline : 1,
        hawaii : 0,
        nyc : 0,
        cabin : 0,
        thailand : 0,
        hanoi : 0
    };
    const result = rateScorecard(scorecard);

    assert.equal(result, expected);
});