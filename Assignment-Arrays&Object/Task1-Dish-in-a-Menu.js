let dishes = [
    {'dishID': 001, 'dishName': 'Adobo', 'dishPrice': 250, 'Ingredient': ['Chicken/Pork', ' Soy Sauce', ' Vinegar', ' Garlic', ' Black paper', ' Onion']},
    {'dishID': 002, 'dishName': 'Sinigang', 'dishPrice': 280, 'Ingredient': [' Pork belly', ' Kang Kong', ' String beans', ' Sinigang mix', ' Gabi, Onion']},
    {'dishID': 003, 'dishName': 'Sisig', 'dishPrice': 200, 'Ingredient': ['Pork', ' Egg', ' Mayonnaise', ' Garlic', ' Onion', ' Soy Sauce', ' Salt']},
];
for(dish of dishes){
    console.log(dish.dishName +'\n' + dish.dishPrice + '\n' + dish.Ingredient + '\n');
}
