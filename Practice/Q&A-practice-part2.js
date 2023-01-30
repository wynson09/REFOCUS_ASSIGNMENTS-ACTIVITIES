let studentNames = [
    'Reyes, Mark', 
    'Dela Cruz, Gabby', 
    'Santos, John', 
    'Bartolome, Ana' 
];

function PrintStudent(names){
    console.log('Studen names: ');
    names.sort();
    names.forEach(element => {
        console.log(element);
    });
}
studentNames.push('Garcia, Marie');
PrintStudent(studentNames);