function scoreArtist(artist, scorecard) {
    if(artist === 'bluegrass') {
        scorecard.bluegrass += 1;
    }
    if(artist === 'pop') {
        scorecard.pop += 1;
    }
    if(artist === 'hiphop') {
        scorecard.hiphop += 1;
    }
}

export default scoreArtist;