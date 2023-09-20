// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}; 

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}; 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// used fn as the parameter to specify which function to be used(selectDifferentDrivers
const selectDifferentDrivers = function (arrayOfDrivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}; 


//used selectDifferentDrivers as a parameter in stead of fn for function selection
/*
const selectDifferentDrivers = function (arrayOfDrivers, selectDifferentDrivers) {
    if (selectDifferentDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (selectDifferentDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}; */