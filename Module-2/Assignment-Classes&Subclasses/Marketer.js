const Employee = require("./Employee");

class Marketer extends Employee{
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

const marketer = new Marketer('Chigiri', '2000', 'Marketers specializing in promoting the company and showing the products to the customers');
marketer.introduce();
marketer.printSalary();
marketer.specialize();
marketer.worksAt();