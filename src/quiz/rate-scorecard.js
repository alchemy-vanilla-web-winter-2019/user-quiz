function rateScorecard(scorecard) {
    const characters = Object.keys(scorecard);
    console.log(scorecard);
    let max = -1;
    let maxCharacter = null;
    for(let i = 0; i < characters.length; i++) {
        if(scorecard[characters[i]] > max) {
            max = scorecard[characters[i]];
            maxCharacter = characters[i];
        }
    }

    return maxCharacter;
}

export default rateScorecard;
