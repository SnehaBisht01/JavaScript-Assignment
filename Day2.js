// DAY 3: Javascript Mathematical Operators:
//Problem 1:Write a JavaScript program to calculate and print the square of a given number.

 function printSquare(x){
let square = x * x;
console.log("the square of ",x,"is",square);
 }
 let x =5;
 printSquare(x);

//Problem 2:

let a=2,b=3,c=7,d=9,e=6;
let result=(a+b)* c/d-e;
console.log(result);

//Problem 3:
 let p = 5;
 let q = 10;

 console.log("Before swaping:p=",p,", q =",q);
 
 // swaping the  values
 [p,q]= [q,p];
 console.log("After swaping: p=",p,",q =",q);

 //Problem 4:Write a JavaScript program that converts a given temperature in Celsius to Fahrenheit.

 function celsiusToFahrenheit(celsius) {
    let F = (celsius * 9/5) + 32;
    return F; 
}

let temp = 25;
let fahrenheit = celsiusToFahrenheit(temp); // Pass 'temp' instead of 'celsius'
console.log(temp + "°C is equal to " + fahrenheit + "°F");

// Problem 5 Write a JavaScript expression to calculate the area of a rectangle with a length
//of 8 units and a width of 5 units.

let length= 8;
let width = 5;
let area = length* width;
console.log(area);


// Problem 6: multiple of 5

let number = 15;
if(number %5==0){
    console.log(number +" is multiple of 5.");

}else{
    console.log(number+"is not multiple of 5.");
}


