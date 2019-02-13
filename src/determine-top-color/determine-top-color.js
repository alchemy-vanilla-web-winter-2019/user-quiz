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
    if(blue > red
        && blue > purple
        && blue > black
        && blue > yellow
        && blue > green) {
        return 'blue';
    }
    if(purple > red
        && purple > blue
        && purple > black
        && purple > yellow
        && purple > green) {
        return 'purple';
    }
    if(black > red
        && black > blue
        && black > purple
        && black > yellow
        && black > green) {
        return 'black';
    }
    if(yellow > red
        && yellow > blue
        && yellow > purple
        && yellow > black
        && yellow > green) {
        return 'yellow';
    }
    if(green > red
        && green > blue
        && green > purple
        && green > black
        && green > yellow) {
        return 'green';
    }
}

export default determineTopColor;