function scoreFood(food, scorecard) {
    if(food === 'Japanese') {
        scorecard.soma += 1;
    }
    if(food === 'Indian') {
        scorecard.soma += 1;
        scorecard.akira += 1;
    }
    if(food === 'American') {
        scorecard.ikumi += 1;
    }
}

export default scoreFood;