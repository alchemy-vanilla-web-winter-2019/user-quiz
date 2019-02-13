function scoreMovie(movie, scorecard) {
    if(movie === 'star') {
        scorecard.mercer += 1;
        scorecard.perkins += 1;
    }
    if(movie === 'evil') {
        scorecard.colville += 1;
        scorecard.perkins += 1;
    }
    if(movie === 'odyssey') {
        scorecard.colville += 1;
        scorecard.perkins += 0.5;
    }
    if(movie === 'labyrinth') {
        scorecard.colville += 0.5;
        scorecard.mercer += 1;
    }
}

export default scoreMovie;