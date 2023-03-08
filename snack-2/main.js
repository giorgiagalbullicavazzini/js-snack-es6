'use strict';

////////////
// Functions
////////////

// A function to create a student object containing their id, name and grades
const createStudent = (studentId, fullName, studentGrades) => {
    const student = {
      id: studentId,
      name: fullName,
      grades: studentGrades,
    };
  
    return student;
  }

// A function to create an element
const elementCreation = (elementType) => document.createElement(elementType);


////////////
// Main
////////////

// For each student, we can create an object will all the information needed
const marcoDellaRovere = createStudent(213, 'Marco della Rovere', 78);
const paolaCortellessa = createStudent(110, 'Paola Cortellessa', 96);
const andreaMantegna = createStudent(250, 'Andrea Mantegna', 48);
const gaiaBorromini = createStudent(145, 'Gaia Borromini', 74);
const luigiGrimaldello = createStudent(196, 'Luigi Grimaldello', 68);
const pieroDellaFrancesca = createStudent(102, 'Piero della Francesca', 50);
const francescaDaPolenta = createStudent(120, 'Francesca da Polenta', 84);

// Creation of an objects array containing the list of the students
const studentList = [marcoDellaRovere, paolaCortellessa, andreaMantegna, gaiaBorromini, luigiGrimaldello, pieroDellaFrancesca, francescaDaPolenta];
console.log(studentList);

const containerUppercase = document.querySelector('.container.uppercase');

// Creation of a list containing the uppercased names of the students
const studentTags = [];
studentList.forEach((element) => {
    const studentName = element.name.toUpperCase();
    studentTags.push(studentName);

    const uppercaseList = elementCreation('div');
    uppercaseList.innerHTML = studentName;
    containerUppercase.append(uppercaseList);
});

console.log(studentTags);

// Creation of a list containing the names of the students with a grade value greater than 70
const studentHigherGrades = studentList.filter((element) => {
    if (element.grades > 70) {
        return true;
    }

    return false;
});

console.log(studentHigherGrades);

const containerGrades = document.querySelector('.container.grades');
studentHigherGrades.forEach((element) => {
    const gradesList = elementCreation('div');
    gradesList.innerHTML = `ID: ${element.id}<br>Nome: ${element.name}<br>Somma dei voti: ${element.grades}`;
    containerGrades.append(gradesList);
});

// Creation of a list containing the names of the students with a grade value greater than 70 and an id greater than 120
const studentHigherGradesId = studentHigherGrades.filter((element) => {
    if (element.id > 120) {
        return true;
    }

    return false;
});

console.log(studentHigherGradesId);

const containerGradesId = document.querySelector('.container.grades-id');
studentHigherGradesId.forEach((element) => {
    const gradesIdList = elementCreation('div');
    gradesIdList.innerHTML = `ID: ${element.id}<br>Nome: ${element.name}<br>Somma dei voti: ${element.grades}`;
    containerGradesId.append(gradesIdList);
});