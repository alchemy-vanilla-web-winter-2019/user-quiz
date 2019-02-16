function bestHeath (answer, scorecard) {
    if(answer === 'melancholic'){
        scorecard.melancholic += .7;
    }
    if(answer === 'euphoric'){
        scorecard.euphoric += .5;
    }
    if(answer === 'enraged'){
        scorecard.enraged += .6;
    }

}

export default bestHeath;