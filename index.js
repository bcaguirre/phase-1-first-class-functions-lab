// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(0,2)
} 

const returnLastTwoDrivers = function(){
    const drivers = ["Antonia","Nuru", "Amari", "Mo"];
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare};
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    drivers = []
    return(returnFirstTwoDrivers());
}