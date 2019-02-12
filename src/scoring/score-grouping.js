function scoreGrouping(grouping, scorecard) {
    switch(grouping) {
        case 'large':
            scorecard.assassin += 2 / 15;
            scorecard.fighter += 28 / 40;
            scorecard.mage += 27 / 33;
            scorecard.marksman += 15 / 22;
            scorecard.support += 10 / 14;
            scorecard.tank += 16 / 19;
            break;
        case 'duels':
            scorecard.assassin += 15 / 15;
            scorecard.fighter += 25 / 40;
            scorecard.mage += 14 / 33;
            scorecard.marksman += 14 / 22;
            scorecard.support += 2 / 14;
            scorecard.tank += 3 / 19;
            break;
    }
}
export default scoreGrouping;