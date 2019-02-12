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
    else if(hawaii > nyc && hawaii > cabin && hawaii > thailand && hawaii > hanoi) {
        return 'Hawaii';
    }
    else if(nyc > cabin && nyc > thailand && nyc > hanoi) {
        return 'New York City';
    }
    else if(cabin > thailand && cabin > hanoi) {
        return 'a forest service cabin in the Mount Hood National Forest';
    }
    else if(thailand > hanoi) {
        return 'Thailand';
    }
    else {
        return 'Hanoi, Vietnam';
    }
}

export default rateScorecard;