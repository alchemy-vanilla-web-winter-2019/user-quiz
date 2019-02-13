function determineTopColor(scorecard) {
    const red = scorecard.red;
    const blue = scorecard.blue;
    const purple = scorecard.purple;
    const black = scorecard.black;
    const yellow = scorecard.yellow;
    const green = scorecard.green;

    if(red > blue 
        && red > purple 
        && red > black
        && red > yellow
        && red > green) {
        return 'red';
    }

}

export default determineTopColor;