//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "What books should an aspiring journalist read?",
    "Marie Colvin shined a light on war-torn corners of the world",
  ];
  // hold the original value of an array
  export function search() {
    //inputValue is the variable that contains the search string
    const inputValue = document.getElementById("search-input").value;
    var newsListToLowerCase = newsList.map(element => {       
      return element.toLowerCase();
    });
    let holdValue = []; 
    let x = 0;
  
    //Write your code here for the search function
    for(var i = 0; i < newsList.length; i++){
      var result = newsListToLowerCase[i].match(inputValue.toLocaleLowerCase());
      if((result != null) || (result != undefined)){
          holdValue[x] = newsList[i];
          x++;
      }
    }
  
    newsList = holdValue;
    return newsList;
  }
  
  export function sort(type) {
    if (type == "ascending") {
      //Write your code here for sorting (ascending)
      newsList.sort();
    } else {
      //Write your code here for sorting (descending)
      newsList.sort();
      newsList.reverse();
    }
  
    return newsList;
  }


  import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search 'Armenia', expected outputs 'Decoder: Armenia in a bind as Ukraine war resets global order'", () => {
  const inputValue = "Armenia"
  expect(newsList.filter(value => value.match(inputValue))).toEqual([
    "Decoder: Armenia in a bind as Ukraine war resets global order"
  ]);
});

// Test for sort function 
test("Test ascending sort", () => {
    expect(sort("ascending")).toEqual(
      [
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        'Buried underpants and tea bags help scientists evaluate soil',
        'Decoder: Armenia in a bind as Ukraine war resets global order',
        'Decoder: Mining asteroids for minerals can help spare Earth',
        'Marie Colvin shined a light on war-torn corners of the world',
        'Media glare can enrich tennis pros yet imperil mental health',
        'What books should an aspiring journalist read?',
        'What films should an aspiring journalist watch?'
      ]);
});

  
  
  
