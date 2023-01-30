const Article = 'there is a storm coming to the East of the Philippines'; //first Article
const Article2 = 'no more rainy days here, sun is about to show up';      //second article

//first article
const filterUpperCase = Article.replace(/[^A-Z]/g, '').substring(0,1);                  // will get the upper-case letter which is E and P letters 
console.log(`First Article: \nThe first uppercase letter is "${filterUpperCase}"`);    // then by using substring to get the first upper-case letter

//second article
const filterUpperCase2 = Article2.replace(/[^A-Z]/g, '').substring(0,1);               // will get the uppercase letter of the second article

// I used If else statement to check if the article has uppercase or not.
if(filterUpperCase2 == ''){
    console.log('Second Article: \nThere is no uppercase in the second article');
}else{
    console.log(`Second Article: \nThe first uppercase letter is "${filterUpperCase2}"`);
}

