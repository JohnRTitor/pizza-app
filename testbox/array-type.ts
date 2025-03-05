let ages: number[] = [4, 5, 9];
// this just means ages will always be an array of numbers
ages.push(6);
console.log(ages);

type Student = {
  name: string;
  age: number;
};

let student1: Student = {
  name: "John Doe",
  age: 19,
};
let student2: Student = {
  name: "Jane Doe",
  age: 20,
};

// another way of "typing" an array of students
let studentlist1: Array<Student> = [student1, student2];
