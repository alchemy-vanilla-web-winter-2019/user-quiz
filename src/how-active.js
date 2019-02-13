function calculateHowActive(howActive, usersScores) {
    if(howActive <= 5) {
        usersScores.researcher += 1;
    }
    else if(howActive > 5) {
        usersScores.professionalAthlete += 1;
    }

}

export default calculateHowActive;