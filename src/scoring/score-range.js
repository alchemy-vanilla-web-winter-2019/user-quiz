function scoreRange(range, scorecard) {
    switch(range) {
        case 'short':
            scorecard.assassin += 13 / 15;
            scorecard.fighter += 38 / 40;
            scorecard.mage += 1 / 33;
            scorecard.marksman += 0;
            scorecard.support += 6 / 14;
            scorecard.tank += 1;
            break;
        case 'long':
            scorecard.assassin += 2 / 15;
            scorecard.fighter += 2 / 40;
            scorecard.mage += 32 / 33;
            scorecard.marksman += 1;
            scorecard.support += 8 / 14;
            scorecard.tank += 0;
            break;
    }
}
export default scoreRange;