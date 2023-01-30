//TASK 1 Create an Object Variable
let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20
}
//TASK 2 Print the Object Data
function showData(){
    console.log(`=========================`);
    console.log(`First Number: ${obj.num1}`);
    console.log(`Second Number: ${obj.num2}`);
    console.log(`The sum: ${obj.sum}`);
    console.log(`The difference: ${obj.difference}`);
    console.log(`The product: ${obj.product}`);
    console.log(`The quotient: ${obj.quotient}`);
}

//TASK 3 Create functions for Calculations
function add(num1, num2){
    obj.sum = num1 + num2;
}
function subtract(num1, num2){
    obj.difference = num1 - num2;
}
function multiply(num1, num2){
    obj.product = num1 * num2;
}
function divide(num1, num2){
    obj.quotient = num1/num2;
}

//TASK 4 Update the Object Data
function newSetOfNumbers(num1, num2){
    obj.num1 = num1;
    obj.num2 = num2;
    add(num1, num2);
    subtract(num1, num2);
    multiply(num1, num2);
    divide(num1, num2);
}
//TASK 5 Call the Functions
showData();
newSetOfNumbers(200, 10);
showData();
newSetOfNumbers(500, 20);
showData();
