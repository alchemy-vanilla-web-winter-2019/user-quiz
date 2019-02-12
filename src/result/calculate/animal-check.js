function animalCheck(animal, scorecard) {
    if(animal === 'lion') {
        scorecard.gryffindor += 1;
    }
    if(animal === 'snake') {
        scorecard.slytherin += 1;
    }
    if(animal === 'bird') {
        scorecard.ravenclaw += 1;
    }
    if(animal === 'badger') {
        scorecard.hufflepuff += 1;
    }
    return scorecard;
}

export default animalCheck;