const Employee = require("./Employee");

class ProductOwner extends Employee{
    companyProject = [];
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
    Projects () {
        console.log(`Company's projects are: `);
        for (let project of this.companyProject){
            console.log(`${project}`);
        }
    }
}


const PO = new ProductOwner('Sae', '3000', 'Product owner specializing in creating new projects');
PO.companyProject.push('A Trivia/Quiz Game Using JS (and jQuery)');
PO.companyProject.push('A Basic Survey Form');
PO.companyProject.push('Full Stack Web Development Project Like Netflix');
PO.introduce();
PO.printSalary();
PO.specialize();
PO.worksAt();
PO.Projects();