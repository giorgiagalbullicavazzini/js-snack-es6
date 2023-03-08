'use strict';

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