function scorePlayers(players, scorecard) {
    if(players === 'normal') {
        scorecard.colville += 1;
    } else if(players === 'voice') {
        scorecard.mercer += 1;
    } else {
        scorecard.perkins += 1;
    }
}

export default scorePlayers;