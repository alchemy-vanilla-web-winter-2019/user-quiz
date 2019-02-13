function calculateDreamJob(usersScores) {
    if(usersScores.researcher > usersScores.professionalAthlete) {
        return 'researcher';
    }
  //you COULD change this to else. But this is for if you want to come back and add more jobs and need to recalculate. 
    else if(usersScores.professionalAthlete > usersScores.researcher) {
        return 'professional athlete';
    }
}

export default calculateDreamJob;