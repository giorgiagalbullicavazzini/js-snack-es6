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

// Creation of a list containing the uppercased names of the students
studentList.forEach((element) => {
    const studentName = element.name.toUpperCase();
    console.log(studentName);
});




// The second list we need to create contains the names of the students with a grade value greater than 70
// Using a `filter` loop, we can create this array
// Starting from our very first list, we can set the condition to add to the current array only the students with the proper grade
// IF the value is greater than 70, the condition is true and the element gets pushed in the current array
// The third list contains the names of the students with a grade value greater than 70 and an id greater than 120
// In order to create this last list, we can use another `filter` loop, almost equal to the previous one
// The only difference is the condition given
// This time there are two conditions with an `&&` logic operator