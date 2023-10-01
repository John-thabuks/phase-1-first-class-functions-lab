// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

//const selectingDrivers = returnFirstTwoDrivers().concat(returnLastTwoDrivers());

function createFareMultiplier(x){
    return (y) => x * y;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function fareDoubler(x){
    return x * 2;
}

function fareTripler(x){
    return x *3;
}

function selectDifferentDrivers(arrayOfDrivers, functionX){
    return functionX(arrayOfDrivers)
}