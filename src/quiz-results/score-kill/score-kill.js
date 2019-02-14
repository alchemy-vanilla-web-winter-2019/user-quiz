function scoreKill(kill, scorecard) {    
    if(kill.length === 1) {
        switch(kill[0]) {
            case 'honor':
                scorecard.mercer += 1;
                scorecard.colville += 0.5;
                scorecard.perkins += 0.5;
                break;
            case 'dishonor':
                scorecard.mercer -= 1;        
                scorecard.perkins += 1;
                break;
            case 'drama':
                scorecard.colville += 1;
                scorecard.mercer += 1;
                break;
            case 'poor':
                scorecard.colville += 1;
                scorecard.perkins += 1;
                break;
            default:
                break;
        }        
    }
    if(kill.length === 0) {
        scorecard.mercer += 1;
        scorecard.colville -= 1;
        scorecard.perkins -= 1;
    }
}

export default scoreKill;