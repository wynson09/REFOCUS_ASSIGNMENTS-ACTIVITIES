const Employee = require("./Employee");

class Tester extends Employee{
    constructor (name, salary, specialty) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
    }

    specialize(){
        console.log(`I am a ${this.specialty}.`)
    }

    worksAt(){
        console.log(`I work at ${this.companyName}.`);
    }
}

const tester = new Tester('Bachira', '2000', 'Tester specializing in checking the code neither the code passes nor the code is rejected');
tester.introduce();
tester.printSalary();
tester.specialize();
tester.worksAt();