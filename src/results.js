import getLocalStorage from './useful/get-local-storage.js';

const scorecard = getLocalStorage('scorecard');

const resultEl = document.getElementById('result');
resultEl.textContent = tally(scorecard);

function tally(scorecard) {
    const assassin = scorecard.assassin;
    const fighter = scorecard.fighter;
    const mage = scorecard.mage;
    const marksman = scorecard.marksman;
    const support = scorecard.support;
    const tank = scorecard.tank;

    const roleValuesArr = [assassin, fighter, mage, marksman, support, tank];
    const highestScore = Math.max(...roleValuesArr);
    const highestScoreIndex = roleValuesArr.indexOf(highestScore);

    switch(highestScoreIndex) {
        case 0:
            return 'Assassin';
        case 1:
            return 'Fighter';
        case 2:
            return 'Mage';
        case 3:
            return 'Marksman';
        case 4:
            return 'Support';
        case 5:
            return 'Tank';
    }
}