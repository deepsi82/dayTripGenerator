"use stirct";
let destination = ['Milwaukee', 'chicago', 'Austin'];
var randomDestination = destination[Math.floor(Math.random()*destination.length)];
console.log(randomDestination);
let restaurent = ['Olive Garden', 'IHop', 'pandaexpress'];
var randomres = restaurent[Math.floor(Math.random()*restaurent.length)];
console.log(randomres);
let modeOfTrans = ['Bus', 'car', 'train'];
var randomTrans = modeOfTrans[Math.floor(Math.random()*modeOfTrans.length)];
console.log(randomTrans);
let entertain = ['Tv', 'movie', 'videoGame'];
var randomEnter = entertain[Math.floor(Math.random()*entertain.length)];
console.log(randomEnter);
let myDayTrip = confirm("press a button!");
if(myDayTrip === true){
    console.log("complete");
}



//let myDayTrip = ['destination', 'restaurent', 'modeOfTransport', 'entertain'];
//let myDayTrip = [];
//myDayTrip[0] = prompt("please enter the destination");//MilwaukeeZoo"
//myDayTrip[1] = prompt("please enter the restaurent");//OliveGarden";
//myDayTrip[2] = prompt("please enter the mode of transport");//"car";
//myDayTrip[3] = prompt("please enter the entertain");//"movies";
//let randomSele = confirm("press a button!");
//if(randomSelect == ture){
    //console.log("complete");
//}


