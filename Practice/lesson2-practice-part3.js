const zooObject = {
    "zoo_name": "Nacs Zoo",
    "zoo_description": "We have many different kind of animals",
    "arr_animals": [
        ["Lion", "🦁"],
        ["Snake", "🐍"],
        ["Fish", "🐟"],
        ["Dog", "🐕‍🦺"],
    ],
    "enumerateAnimals": function(){
        for (animal in this.arr_animals){
           console.log("Please welcome a "+ this.arr_animals[animal]+ "! ");
        }
    }
}
zooObject.arr_animals.push(["Elephant", "🐘"]);
console.log(zooObject.zoo_name);
console.log(zooObject.zoo_description);
zooObject.enumerateAnimals();