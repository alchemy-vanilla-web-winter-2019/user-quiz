function scoreKill(kill, scorecard) {    
    switch(kill.length) {
        case 0:
            scorecard.mercer += 1;
            scorecard.colville -= 1;
            scorecard.perkins -= 1;
            break;
        case 1:
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
            break;
        case 2:
            switch(kill[0]) {
                case 'honor':
                    switch(kill[1]) {
                        case 'drama':
                            scorecard.colville += 0.5;
                            scorecard.perkins += 0.5;
                            scorecard.mercer += 1;
                            break;
                        case 'poor':
                            scorecard.colville += 1;
                            scorecard.mercer += 0.5;
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

export default scoreKill;