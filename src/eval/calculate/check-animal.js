function checkAnimal(animal, scorecard) {
    if(animal === 'monkey') {
        scorecard.banana += 1;
    }
    if(animal === 'pig') {
        scorecard.kiwi += 1;
    }
    if(animal === 'crow') {
        scorecard.blueberry += 1;
    }
    if(animal === 'horse') {
        scorecard.apple += 1;
    }
    return scorecard;
}

export default checkAnimal;