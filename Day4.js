// problem 1: Greet the user:
 
function greetUser(name){
console.log("Hello,"+ name + " "+ "Welcome!");
}

let userName = "Sneha";
greetUser(userName);

//Problem 2:

// function RectangleAreaCalculator(l,b){
//    let  area = l*b;
//    console.log("area of rectangle is " + area); 
    

// }
// let l = 5;
// let b = 7;
// RectangleAreaCalculator(l,b);

// Problem 3:
function numberComparison(a,b){
    if(a==b){
        console.log("numbers are equal");
    }
    else{
        console.log("numbers are not equal");

    }
}

let a=2,b=2;
numberComparison(a,b);

// Problem 4:
 function VotingEligibilityChecker(age){
if (age<18){
    console.log("not eligible for giving vote");    
}else{
    console.log("eligible  for voting");
}
 }

 let age = 19;
 VotingEligibilityChecker(age);


/* -------------Day-5----------*/

// Problem 1:Write a JavaScript program that compares two variables and prints the larger one.

let num1 = 42;
let num2= 67;
if(num1>num2){
console.log(`The larger numberis: ${num1}`);
}else if(num2>num1){
    console.log(`The larger no is:${num2}`);
}else{
    console.log("Both no are equal.");
}

//Problem2: 

let Age =40;
if(Age<18){
    console.log("You are minor");
}else{
    console.log("You are an adult");
}


//Problem 3:
let value = 60;
if(value%5==0){
    console.log("This value is divisible by 5");
}else{
    console.log("Not divisible by 5");
}

//Problem 4:
let value1 = 60;
if(value1 %2 ==0){
    console.log(" the number is Even No");
}else{
    console.log("the number is odd no");
}

//Problem 5:
 let Number = -2;
 if(Number<0){
    console.log("Num is not positive")

 }else{
    console.log("Num is positive");
 }