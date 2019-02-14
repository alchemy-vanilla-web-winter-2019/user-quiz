function scoreEngage(engage, scorecard) {
    switch(engage) {
        case 'yes':
            scorecard.assassin += 6 / 15;
            scorecard.fighter += 34 / 40;
            scorecard.mage += 20 / 33;
            scorecard.marksman += 5 / 22;
            scorecard.support += 10 / 14;
            scorecard.tank += 19 / 19;
            break;
        case 'avoid':
            scorecard.assassin += 4 / 15;
            scorecard.fighter += 9 / 40;
            scorecard.mage += 26 / 33;
            scorecard.marksman += 13 / 22;
            scorecard.support += 12 / 14;
            scorecard.tank += 7 / 19;
            break;
        case 'clean':
            scorecard.assassin += 12 / 15;
            scorecard.fighter += 14 / 40;
            scorecard.mage += 20 / 33;
            scorecard.marksman += 22 / 22;
            scorecard.support += 1 / 14;
            scorecard.tank += 1 / 19;
            break;
    }
}
export default scoreEngage;