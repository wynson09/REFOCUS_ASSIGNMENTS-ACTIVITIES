zooObject = {
    "zoo_name": "Nacs Zoo",
    "zoo_description": "We have many different kind of animals",
    "arr_animals": [
        {'animal_name': 'Lion', 'animal_emoji': '🦁'},
        {'animal_name': 'Snake', 'animal_emoji': '🐍'},
        {'animal_name': 'Fish', 'animal_emoji': '🐟'},
    ],
    "enumerateAnimals": function(){
        for (animal of this.arr_animals){
           console.log('Please welcome '+ animal.animal_name + ', a ' + animal.animal_emoji +'!');
        }
    }
}
console.log(zooObject.zoo_name);
console.log(zooObject.zoo_description);
zooObject.arr_animals.push({'animal_name': 'Elephant', 'animal_emoji': '🐘'});
zooObject.enumerateAnimals();