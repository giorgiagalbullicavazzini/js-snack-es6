'use strict';

////////////
// Functions
////////////

// A function to create an element
const elementCreation = (elementType) => document.createElement(elementType);

////////////
// Main
////////////

// Creation of an array with the names of the guests
const guestsList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// Creation of the second array
const placeCards = guestsList.map((element, index) => {
    // This array transforms the first one in an objects array and adds the remaining attributes
    const guest = {
        table: 'Tavolo Vip',
        name: element,
        place: index + 1,
    }

    return guest;
});

console.log(placeCards);

const container = document.querySelector('.container');
placeCards.forEach((element) => {
    const card = elementCreation('div');
    card.innerHTML = `Tavolo: ${element.table}<br>Nome: ${element.name}<br>Posto: ${element.place}`;
    container.append(card);
});