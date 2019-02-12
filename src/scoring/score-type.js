function scoreType(type, scorecard) {
    switch(type) {
        case 'physical':
            scorecard.assassin += 7 / 15;
            scorecard.fighter += 35 / 40;
            scorecard.mage += 0 / 33;
            scorecard.marksman += 21 / 22;
            scorecard.support += 1 / 14;
            scorecard.tank += 6 / 19;
            break;
        case 'magical':
            scorecard.assassin += 8 / 15;
            scorecard.fighter += 11 / 40;
            scorecard.mage += 33 / 33;
            scorecard.marksman += 5 / 22;
            scorecard.support += 13 / 14;
            scorecard.tank += 16 / 19;
            break;
    }
}
export default scoreType;