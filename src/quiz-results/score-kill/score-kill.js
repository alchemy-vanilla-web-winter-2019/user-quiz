function scoreKill(kill, scorecard) {    
    if(kill.length === 1) {
        if(kill[0] === 'honor') {
            scorecard.mercer += 1;
            scorecard.colville += 0.5;
            scorecard.perkins += 0.5;
        }
        if(kill[0] === 'dishonor') {
            scorecard.mercer -= 1;        
            scorecard.perkins += 1;
        }
    }
    if(kill.length === 0) {
        scorecard.mercer += 1;
        scorecard.colville -= 1;
        scorecard.perkins -= 1;
    }
}

export default scoreKill;