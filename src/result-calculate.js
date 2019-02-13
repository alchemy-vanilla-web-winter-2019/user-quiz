function resultCalculate(banana){
    if(banana.morrison > banana.winehouse
        && banana.morrison > banana.hendrix
        && banana.morrison > banana.joplin){
        return 'Jim Morrison (1943 - 1971)';
    }
    else if(banana.winehouse > banana.hendrix
        && banana.winehouse > banana.joplin
        && banana.winehouse > banana.morrison){
        return 'Amy Winehouse (1983 - 2011)';
    }
    else if(banana.hendrix > banana.joplin
        && banana.hendrix > banana.morrison
        && banana.hendrix > banana.winehouse){
        return 'Jimi Hendrix (1942 - 1970)';
    }
    else if(banana.joplin > banana.hendrix
        && banana.joplin > banana.morrison
        && banana.joplin > banana.winehouse){
        return 'Janis Joplin (1941 - 1970)';
    }
    else {
        return 'Looks like you\'re still alive';
    }
}

export default resultCalculate;