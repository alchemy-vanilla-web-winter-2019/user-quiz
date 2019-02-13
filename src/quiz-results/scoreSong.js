function scoreSong(song, scorecard) {
    if(song === 'bluegrass') {
        scorecard.bluegrass += 1;
    }
    if(song === 'pop') {
        scorecard.pop += 1;
    }
    if(song === 'hiphop') {
        scorecard.hiphop += 1;
    }
}

export default scoreSong;