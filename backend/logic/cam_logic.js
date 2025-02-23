function recomendedCam(county){
    let camRecs = [];

    //Swift Fox
    if(county === "Valley" || county === "Blaine" || county ==="Hill" || county ==="Phillips"){
        camRecs =["Swift Fox"];
    }

    //Coyote
    if(county === "Rosebud" || county === "Flathead" || county === "Custer" || county ==="Powder Rivers" || county === "Glacier"){
        camRecs =["Coyote"];
    }

    //Grey Wolf
    if(county === "Flathead" || county ==="Lincoln" || county ==="Powell" || county ==="Missoula" || county==="Lewis and Clark"){
        camRecs = ["Grey Wolf"];
    }

    //Grizzly Bear
    if(county === "Missoula" || county==="Flathead" || county==="Lake" || county ==="Lincoln" || county ==="Galatin" || county ==="Carbon"){
        camRecs = ["Grizzly Bear"];
    }

    //Black Bear
    if(county === "Glacier" || county === "Missoula" || county ==="Powder River" || county === "Sander" || county === "Flathead" || county === "Gallatin" || county === "Lincoln"){
        camRecs = ["Black Bear"];
    }

    //Prairie Dog 
    if(county === "Powder River" || county === "Big Horn" || county === "Blaine" || county === "Phillips" || county === "Rosebud" || county === "Custer"){
        camRecs = ["Prairie Dog"];
    }
}