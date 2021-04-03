// Should return an array "[]" containing the first two drivers passed in array
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
// Should return an array "[]" of the last two drivers
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
// Has First Element = "returnFirstTwoDrivers" an Second Element = "returnLastTwoDrivers" invoking both to the array "[]"
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Creates function "createFareMultiplier" which multiplies the created multiplier
const createFareMultiplier = function (multiply) {
  return function (value) {
    return multiply * value;
  };
};
// Creates Function "fareDoubler" calling "()" "createMultiplier function" multiplied by 2
const fareDoubler = createFareMultiplier (2);

// Creates Function "fareTriple" calling "()" "createMultiplier function" multiplied by 3
const fareTripler = createFareMultiplier (3);

// Returns the first two drivers when passed "returnFirstTwoDrivers()" as the second argument also returns the last two drivers when passed "returnLastTwoDrivers()" as the second argument 
const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };