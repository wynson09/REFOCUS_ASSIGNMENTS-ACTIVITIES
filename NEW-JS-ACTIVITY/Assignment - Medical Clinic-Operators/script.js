const birth_year = 1999;
let current_year =  new Date().getFullYear();
//Calculate the patient age
let age = current_year - birth_year;

console.log(`Patient's age: ${age}`);