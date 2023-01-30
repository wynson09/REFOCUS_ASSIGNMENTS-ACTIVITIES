const ScanCargoTruck = { // make an object
    "cargo_name": "Land21 Cargo Truck",
    "capacity": 14500,
    "item_name": ["SUV", "Audi A8", "Nissan Navara", "Ford Mustang"],
    "item_weight": [3000,2000,2400,1700],
    "weight_sum": 0,      
    "weightCapacity_checker": function(){ //check the weight of 4 cars
        for(var i = 0; i < this.item_weight.length; i++){ // sum the weight of 4 cars
            this.weight_sum += this.item_weight[i];
        }
        if (this.weight_sum >= this.capacity){ // check if it is exceed the capacity of a cargo truck
            console.log(`The total weight is ${this.weight_sum.toLocaleString("en-US")}kg and It is exceed the capacity of a cargo truck`);
        }else{
            console.log("The total weight is "+ this.weight_sum.toLocaleString("en-US") + "kg and It is with in the capacity of a cargo truck");
        }
    }
}
ScanCargoTruck.item_name.push("Toyota Innova"); // add another item in an array item_name
ScanCargoTruck.item_weight.push(3000); // add the weight of the new added item
console.log(`There are ${ScanCargoTruck.item_name.length} cars in the cargo truck`); 
console.log("Those are:");
for(cars in ScanCargoTruck.item_name){
    console.log(ScanCargoTruck.item_name[cars]);
}
ScanCargoTruck.weightCapacity_checker();
