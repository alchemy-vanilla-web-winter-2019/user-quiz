function checkSeason(season, scorecard) {
    if(season === 'winter') {
        scorecard.sophia += 1;
    }
    if(season === 'autumn') {
        scorecard.dorothy += 1;
    }
    if(season === 'spring') {
        scorecard.rose += 1;
    }
    if(season === 'summer') {
        scorecard.blanche += 1;
    }
    return scorecard;
}   

export default checkSeason;