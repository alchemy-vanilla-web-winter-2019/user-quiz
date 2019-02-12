function scoreColor(colorAnswer, scorecard){
    if(colorAnswer === 'black'){
        scorecard.winehouse += 1;
    }
    else if(colorAnswer === 'purple'){
        scorecard.hendrix += 1;
    }
    else if(colorAnswer === 'green'){
        scorecard.morrison += 1;
    }
    else {
        scorecard.joplin += 1;
    }
}

export default scoreColor;