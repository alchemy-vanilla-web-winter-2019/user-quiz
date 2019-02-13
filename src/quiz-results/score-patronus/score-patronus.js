function scorePatronus(answer, scorecard) {
    if(answer === 'doe'){
        scorecard.Gryffindor += 1;
    }
    if(answer === 'snake'){
        scorecard.Slytherin += 1;
    }
    if(answer === 'badger'){
        scorecard.Hufflepuff += 1;
    }
    if(answer === 'eagle'){
        scorecard.Ravenclaw += 1;
    }
}

export default scorePatronus;