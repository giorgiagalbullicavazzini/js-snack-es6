'use strict';

////////////
// Functions
////////////

// A function to create a football team object containing its name, scored points and suffered fouls
function createTeam(teamName) {
    const team = {
        name: teamName,
        points: 0,
        'suffered-fouls': 0,
    }

    return team;
}

////////////
// Main
////////////

// Creation of an objects array containing some football teams
const atalanta = createTeam('Atalanta');
const bologna = createTeam('Bologna');
const cremonese = createTeam('Cremonese');
const empoli = createTeam('Empoli');
const fiorentina = createTeam('Fiorentina');
const inter = createTeam('Inter');
const juventus = createTeam('Juventus');
const lazio = createTeam('Lazio');
const lecce = createTeam('Lecce');
const milan = createTeam('Milan');
const monza = createTeam('Monza');
const napoli = createTeam('Napoli');
const roma = createTeam('Roma');
const salernitana = createTeam('Salernitana');
const sampdoria = createTeam('Sampdoria');
const sassuolo = createTeam('Sassuolo');
const spezia = createTeam('Spezia');
const torino = createTeam('Torino');
const udinese = createTeam('Udinese');
const verona = createTeam('Verona');

const footballTeam = [atalanta, bologna, cremonese, empoli, fiorentina, inter, juventus, lazio, lecce, milan, monza, napoli, roma, salernitana, sampdoria, sassuolo, spezia, torino, udinese, verona];

const footballTeamScores = [];

// We can use a forEach loop to reassign the values of points and fouls using the Math.random method
footballTeam.forEach((element) => {
    element.points = Math.floor(Math.random() * 101);
    element['suffered-fouls'] = Math.floor(Math.random() * 51);

    // We can use a destructuring assignment into a loop to save the new values of the suffered fouls and the names of the teams and put them in a new array
    const {name, ['suffered-fouls']: sufferedFouls} = element;
    const teamScores = {
        name,
        'suffered-fouls': sufferedFouls,
    }
    footballTeamScores.push(teamScores);
});

// Finally, we can console print the new array
console.log(footballTeam);
console.log(footballTeamScores);