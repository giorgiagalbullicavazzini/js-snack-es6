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
const vanRyselUltegra = createBike('Racing Bike Van Rysel, EDR CF ULTEGRA', 7.7);
const ultegra = createBike('Racing Bike, EDR AF ULTEGRA', 8.6);


const racingBikes = [gravelTriban100, gravelTriban120, gravelTriban520, gravelTriban500, cicloTriban52, gravelTriban520Sub, vanRysel105, cicloProWheel520, vanRyselUltegra, ultegra];

// Array alphabetically ordered
const sortBikes = racingBikes.sort((a, b) => a.name.localeCompare(b.name));

// The purpose of this code is to console print the bike with the lesser weight using destructuring and a template literal
let lesserWeight = sortBikes[0].weight;
let lesserWeightName = sortBikes[0].name;

const bikesTable = document.getElementById('bikes');
const fragment = document.createDocumentFragment();

// We can use the destructuring assignment into a forEach loop to save in a variable the values of the current index bike
sortBikes.forEach((element, index) => {
    const {name, weight} = element;

    // Going on with the indexes, we can compare each index with the previous one and save into the variable the one with the lesser weight
    if(index >= 1 && weight < lesserWeight) {
        lesserWeightName = name;
        lesserWeight = weight;
    }

    const tr = document.createElement('tr');
    tr.innerHTML += `<td>${name}</td>`;
    tr.innerHTML += `<td>${weight}</td>`;
    fragment.append(tr);
});

bikesTable.append(fragment);

const container = document.querySelector('.container');

let lesserWeightBike = `<div>La bicicletta con il peso minore è la ${lesserWeightName}, che pesa solo ${lesserWeight} kg!</div>`;
console.log(lesserWeightBike);

container.innerHTML += lesserWeightBike;