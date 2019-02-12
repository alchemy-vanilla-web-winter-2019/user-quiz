function resultCalculate(banana){
    if(banana.morrison > banana.winehouse
        && banana.morrison > banana.hendrix
        && banana.morrison > banana.joplin){
        return 'Jim Morrison';
    }
    else if(banana.winehouse > banana.hendrix
        && banana.winehouse > banana.joplin){
        return 'Amy Winehouse';
    }
    else if(banana.hendrix > banana.joplin){
        return 'Jimi Hendrix';
    }
    else {
        return 'Janis Joplin';
    }
}

export default resultCalculate;