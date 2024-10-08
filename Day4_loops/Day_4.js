// ### **Activity 1: For Loop**

// Task 1:
// for (let num =1; num <= 10; num++){
//     console.log(num);
// }

// Task 2:
// console.log("Multiplication table of 5 :");
// for (let i = 1; i <=10 ; i++) {
//     console.log(`5 * ${i} =`,5*i);
// }


// ### **Activity 2: While Loop**

// Task 3:
// let number = 1;
// let sum =0;
// while (number <= 10){
//     sum = number + sum
//     number++;
// }
// console.log(sum); // sum should be 55

// Task 4:
// let numberInReverse = 10
// while (numberInReverse > 0) {
//     console.log(numberInReverse);
//     numberInReverse--;
// }


// ### **Activity 3: Do…While Loop**

// Task 5:
// let num1 = 1;
// do {
//     console.log(num1);
//     num1++;
// }while(num1<6)

// Task 6:
// let result = 1;
// let factorialNum = 5

// if (factorialNum < 0) {

//     result = "Factorial of a negative number doesn't exist!."
    
// } else if(factorialNum === 0){
//    result = 1; // 0! =1 , by definition
// } else {
//     do {
//         result = result * factorialNum;
//         factorialNum--;

//     } while (factorialNum > 0);
// }

// console.log(result);


// ### **Activity 4: Nested Loops**

// Task 7:
// for (let i = 0; i <= 5; i++) {
//     let result = " ";
//     for (let j = 0; j < i ; j++) {
//         result += "*"
//     }
//     console.log(result);
// }


//### **Activity 5: Loop Control Statements**
// Task 8:
// for (let num = 1; num <= 10; num++){
//     if (num === 5) {
//         continue;
//     }
//     else{
//         console.log(num);
//     }
// }


// Task 9:
// for(let num =1; num <= 10; num++){
//     if (num === 7) {
//         break;
//     }
//     else{
//         console.log(num);
//     }
// }