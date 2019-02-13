function timeScoreCrunch(choice, scorecard) {
    if(choice === 'morning') {
        scorecard.red += 0.5;
        scorecard.purple += 0.5;
        scorecard.yellow += 1;
        scorecard.green += 0.5;
    }
    if(choice === 'mid-day') {
        scorecard.blue += 1;
        scorecard.yellow += 0.5;
        scorecard.green += 1;
    }
    if(choice === 'evening') {
        scorecard.red += 0.5;
        scorecard.blue += 0.5;
        scorecard.purple += 0.5;
        scorecard.black += 1;
    }
    if(choice === 'midnight') {
        scorecard.blue += 0.5;
        scorecard.purple += 0.5;
        scorecard.black += 1;
        scorecard.yellow += 0.5;
    }
}

export default timeScoreCrunch;