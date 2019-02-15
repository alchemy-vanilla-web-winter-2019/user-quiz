function scoreFood(food, scorecard) {
    if(food === 'Japanese') {
        scorecard.soma += 1;
        return scorecard;
    } else if(food === 'American') {
        scorecard.ikumi += 1;
    } else if(food === 'Indian') {
        scorecard.akira += 1;
    }
}

export default scoreFood;