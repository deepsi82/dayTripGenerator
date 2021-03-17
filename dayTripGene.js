"use stirct";
let destination = ['Milwaukee', 'chicago', 'Austin', 'Madison', 'GreenBay'];
let restaurent = ['Olive Garden', 'IHop', 'pandaexpress', 'Qdoba'];
let modeOfTrans = ['Bus', 'car', 'train', 'airTravel'];
let entertain = ['Tv', 'movie', 'videoGame', 'music'];



function randomTrip(){
    let randomDestination = destination[Math.floor(Math.random()*destination.length)];
    console.log(randomDestination);
    let randomres = restaurent[Math.floor(Math.random()*restaurent.length)];
    console.log(randomres);
    let randomTrans = modeOfTrans[Math.floor(Math.random()*modeOfTrans.length)];
    console.log(randomTrans);
    let randomEntertain = entertain[Math.floor(Math.random()*entertain.length)];
    console.log(randomEntertain);
    return randomDestination + " " + randomres + " " + randomTrans + " " + randomEntertain;
}


let myDayTrip = confirm("press okay buton if you like the random trip!");
if(myDayTrip === true){
    alert(randomTrip());
    console.log("complete");
}
else{
    console.log("please regenerate the random trip");
}

    
    