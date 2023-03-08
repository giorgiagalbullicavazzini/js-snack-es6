# Students Lists

- The purpose of this code is to create three different lists for a college class;
- The first thing to do is to create an objects array containing the list of the students;
- Each object contains the id of the student, their name and their grades;
- The first list we need to create contains the uppercased names of the students;
- In order to do so, we can use a `forEach` loop;
- The loop saves the value of `array.name` in a `const`;
- Then adds to the `const` an uppercase CSS class and then prints its value;
- The second list we need to create contains the names of the students with a grade value greater than 70;
- Using a `filter` loop, we can create this array;
- Starting from our very first list, we can set the condition to add to the current array only the students with the proper grade;
- IF the value is greater than 70, the condition is true and the element gets pushed in the current array;
- The third list contains the names of the students with a grade value greater than 70 and an id greater than 120;
- In order to create this last list, we can use another `filter` loop, almost equal to the previous one;
- The only difference is the condition given;
- This time there are two conditions with an `&&` logic operator.