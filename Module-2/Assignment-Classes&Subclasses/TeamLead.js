const Employee = require("./Employee");

class TeamLead extends Employee{
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

const TL = new TeamLead('Nagi', '2000', 'Team leader that give instructions to other employees');
TL.introduce();
TL.printSalary();
TL.specialize();
TL.worksAt();