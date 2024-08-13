//  Introduction To Javascript,and variables,DataType

// Problem 1:Print "Ducat An IT Institute" in the console followed by "A Transformation in
// Education" in the next line.
// *Solution:
// console.log("Ducat An IT Institute \nA Transformation in Education.");

// // Problem 2:
// let name= "Sneha bisht";
// console.log(name);

// name ="Mr Devendra Singh Bisht";
// console.log(name);

// name="Mrs Kamla Bisht";
// console.log(name);

//Problem 3:
let Name ="sneha";
let age = 22;
console.log(Name,age);

//Problem 4:
let Student= {
    name:"Rahul",
    school:"KVS",
    grade:5,
    section:"A",
    rollno:22,
    marks:
    {English:50,Hindi:45,Maths:45}
};
function printReportCard(student) {
    console.log("           REPORT CARD         ");
    console.log("_________________________________");
    console.log("* Name     : " + student.name);
    console.log("* School   : " + student.school);
    console.log("* Grade    : " + student.grade);
    console.log("* Section  : " + student.section);
    console.log("* Roll No  : " + student.rollno);
    console.log("_______________________________________");
    console.log("* Marks: ");
    console.log("* English : " + student.marks.English);
    console.log("* Hindi   : " + student.marks.Hindi);
    console.log("* Maths   : " + student.marks.Maths);

}
printReportCard(Student);


