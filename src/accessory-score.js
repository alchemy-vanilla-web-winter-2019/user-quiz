function scoreAccessory(accessoryAnswer, scorecard){
    if(accessoryAnswer === 'flowers'){
        scorecard.joplin += 1;
    }
    else if(accessoryAnswer === 'leather-pants'){
        scorecard.morrison += 1;
    }
    else if(accessoryAnswer === 'eyeliner'){
        scorecard.winehouse += 1;
    }
    else {
        scorecard.hendrix += 1;
    } 
}

export default scoreAccessory;