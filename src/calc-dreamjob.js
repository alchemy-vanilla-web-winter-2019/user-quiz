function calculateDreamJob(usersScores) {
    if(usersScores.researcher > usersScores.professionalAthlete) {
        return 'You\'re dream job is a researcher!!';
    }
  //you COULD change this to else. But this is for if you want to come back and add more jobs and need to recalculate. 
    else if(usersScores.professionalAthlete > usersScores.researcher) {
        return 'You\'re dream job is professional athlete!!';
    }
}

export default calculateDreamJob;