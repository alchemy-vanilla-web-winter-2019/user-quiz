function scoreCoffee(coffee, scorecard) {
    if(coffee === 'sweet') {
        scorecard.yes += 1;
    }
    if(coffee === 'black') {
        scorecard.no += 1;
    }
    if(coffee === 'milk') {
        scorecard.eh += 1;
    }
}

export default scoreCoffee;