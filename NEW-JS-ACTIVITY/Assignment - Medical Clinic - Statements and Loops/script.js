let birth_month = 4;
let current_month = new Date().getMonth();
const birth_year = 1993;
let current_year =  new Date().getFullYear();
//Calculate the patient age
let age = current_year - birth_year;

console.log(`Patient's age: ${age}`);

//Calculate the accurate patient's age
current_month -= current_month;
(birth_month <= current_month) ? age++ : age--;

console.log(`Patient's accurate age: ${age}`);