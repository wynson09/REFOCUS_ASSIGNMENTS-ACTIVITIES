const restaurantMenu ={
    'restaurantName': 'CRN RESTAURANT',
    'dishes': [
        {'dishID': 001, 'dishName': 'Adobo', 'dishPrice': 250, 'Ingredient': ['Chicken/Pork', ' Soy Sauce', ' Vinegar', ' Garlic', ' Black paper', ' Onion']},
        {'dishID': 002, 'dishName': 'Sinigang', 'dishPrice': 280, 'Ingredient': [' Pork belly', ' Kang Kong', ' String beans', ' Sinigang mix', ' Gabi, Onion']},
        {'dishID': 003, 'dishName': 'Sisig', 'dishPrice': 200, 'Ingredient': ['Pork', ' Egg', ' Mayonnaise', ' Garlic', ' Onion', ' Soy Sauce', ' Salt']},
    ],
    'displayRestaurantName': function(){
        console.log(`----- ${this.restaurantName} -----\n`);
        this.displayMenu();
    },
    'displayMenu': function(){
        for(dish of this.dishes){
            console.log(dish.dishName +', ₱' + dish.dishPrice + '\n' + dish.Ingredient + '\n');
        }
    }
}
restaurantMenu.displayRestaurantName();