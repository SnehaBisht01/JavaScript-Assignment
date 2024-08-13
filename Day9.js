//Problem 1: 

// let totalCandidates =100;
// let totalPanels = 4;

// for(let i=1;i<=100;i++){
//     let panelNumber=(i%4)+1;
//     if(panelNumber===5){
//         panelNumber =1;
//     }
//     console.log("candidate"+i+"is assign to panel"+panelNumber);
// }

//  Problem 2:

// let  year = 2024;
// let isLeapYear = false;
// let checkYear= true;

// while(checkYear){
// if((year%4===0 && year % 100!==0)||(year % 400 === 0 )){
//     isLeapYear = true;
// }
// checkYear = false;
// }
// if(isLeapYear){
//     console.log(year+ " is a leap year.");
// }else{
//     console.log(year+ " is not a leap year.");
// }

//  Problem 3:


let limit =20;
let num= 2;
let sum=0;

while(num<=limit){
    let isPrime = true;


let divisor =2;
while(divisor<= Math.sqrt(num)){
    if(num %divisor ===0){
    isPrime = false;
    break;

}
divisor++;
}
if(isPrime){
    sum+=num;
}
num++;
}
console.log("The sum of all prime numbers up to " + limit + " is: " + sum);

