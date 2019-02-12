const resultEl = document.getElementById('result');

const scorecardJson = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(scorecardJson);

resultEl.textContent = tally(scorecard);

function tally(scorecard) {
    const assassin = scorecard.assassin;
    const fighter = scorecard.fighter;
    const mage = scorecard.mage;
    const marksman = scorecard.marksman;
    const support = scorecard.support;
    const tank = scorecard.tank;

    const rolesArray = [assassin, fighter, mage, marksman, support, tank];
    const highestScore = Math.max(...rolesArray);
    const highestScoreIndex = rolesArray.indexOf(highestScore);
    console.log(highestScoreIndex);

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