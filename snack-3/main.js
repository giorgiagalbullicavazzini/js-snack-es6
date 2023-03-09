'use strict';

////////////
// Functions
////////////

// A function to create a bike object containing its name and weight
function createBike(bikeName, bikeWeight) {
    const bike = {
      name: bikeName,
      weight: bikeWeight,
    };
  
    return bike;
  }

////////////
// Main
////////////

// Creation of an objects array containing some racing bikes
const gravelTriban100 = createBike('Racing Bike Gravel, Triban RC 100', 11.3);
const gravelTriban120 = createBike('Racing Bike Gravel, Triban GRVL 120', 10.9);
const gravelTriban520 = createBike('Racing Bike Gravel, Triban GRVL 520 SRAM APEX 1', 10.9);
const gravelTriban500 = createBike('Racing Bike Gravel, Triban RC 500', 10.6);
const cicloTriban52 = createBike('Racing Bike Ciclocross, RCX VAN RYSEL GRX 1X, Triban RC 52', 8.5);
const gravelTriban520Sub = createBike('Racing Bike Gravel, Triban GRVL 520 SUBCOMPACT', 10.7);
const vanRysel105 = createBike('Racing Bike Van Rysel, EDR AF 105', 8.8);
const cicloProWheel520 = createBike('Racing Bike Cicloturismo, RC 520 105 PROWHEEL', 10.4);
const ultegra = createBike('Racing Bike EDR AF ULTEGRA', 8.6);
const vanRyselUltegra = createBike('Racing Bike Van Rysel, EDR CF ULTEGRA', 7.7);

const racingBikes = [gravelTriban100, gravelTriban120, gravelTriban520, gravelTriban500, cicloTriban52, gravelTriban520Sub, vanRysel105, cicloProWheel520, ultegra, vanRyselUltegra];

// The purpose of this code is to console print the bike with the lesser weight using destructuring and a template literal
// We can use the destructuring assignment into a `forEach` loop to save in a variable the values of the current index bike
// Going on with the indexes, we can then compare each index with the previous one and save into the variable the one with the lesser weight
// IF the current bike's weight is lesser than the previous one's, our variable gets reassigned
// ELSE the variable remains the same