//newsList is the variable that holds an array of strings
    var newsList = [
    "What films should an aspiring journalist watch?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Media glare can enrich tennis pros yet imperil mental health",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "What books should an aspiring journalist read?",
    "Marie Colvin shined a light on war-torn corners of the world",
  ];
  // value.match(inputValue)
    function search() {
    //inputValue is the variable that contains the search string
    let inputValue = 'JOURNALIST';
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
  search();
  console.log(newsList);