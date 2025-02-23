function recomendedPeace(acerage, nonLethalDeterant){
    let deterantRecs = [];

    //nonLethalDeterant is going to be a bool variable we pull from the form, if the user selects "yes", implying that they already use a non Lethal Deterant then we can recomend they opt in to a "peace" agreement which would allow them to earn 75 cents per acre, up to 15,000 dollars per year.
    if(nonLethalDeterant){
        deterantRecs = ["Comply"];
    }
    else{
        deterantRecs = [notComply];
    }
    
}