const Employee = require("./Employee");

class HumanResource extends Employee{
    constructor (name, salary, specialty) {
        super();
        this.name = name;
        this.salary = salary;
        this.specialty = specialty;
    }

    specialize(){
        console.log(`I am from ${this.specialty}.`)
    }

    worksAt(){
        console.log(`I work at ${this.companyName}.`);
    }
}

const HR = new HumanResource('Rin', '1000', 'Human Resource Department specializes in hiring an employee');
HR.introduce();
HR.printSalary();
HR.specialize();
HR.worksAt();