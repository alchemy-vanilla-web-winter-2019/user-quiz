function scorePoison(poisonAnswer, scorecard){
    if(poisonAnswer === 'peyote') {
        scorecard.morrison += 1;
    } 
    else if(poisonAnswer === 'burbon') {
        scorecard.winehouse += 1;
    }
    else if(poisonAnswer === 'barbituates') {
        scorecard.hendrix += 1;
    }
    else {
        scorecard.joplin += 1;
    }
}

export default scorePoison;