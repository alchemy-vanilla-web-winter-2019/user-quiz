function scoreFlavorsQuestion(flavorsAnswer, scorecard) {
    if(flavorsAnswer === 'vanilla') {
        scorecard.iceCream += 4;
    }
    else if(flavorsAnswer === 'chocolate') {
        scorecard.brownie += 4;
        scorecard.tiramisu += 1;
    }   
    else if(flavorsAnswer === 'fruity') {
        scorecard.sorbet += 4;
    }
    else if(flavorsAnswer === 'spiced') {
        scorecard.tiramisu += 4;
    }
    else return 'Kale';
}

export default scoreFlavorsQuestion;