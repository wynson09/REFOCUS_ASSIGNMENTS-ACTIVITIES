const Employee = require("./Employee");

class Developer extends Employee{
    specialty;
    constructor(name, salary, specialty){
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

const developer = new Developer('Isagi','3000','full stack web developer specializing in front-end and back-end development');
developer.introduce();
developer.printSalary();
developer.specialize();
developer.worksAt();
