const arr = [
    'Web Developer',
    'Refocus',
    'Web Developer',
    'Web Developer',
    'Refocus',
    'Awesome',
];
// I declare an array to counts the number of times each element shows
var count = [
    {'Web Developer': 0 , 'Refocus': 0 , 'Awesome': 0 }
];
// I use ForEach Method
arr.forEach(function(value){
    if(value === 'Web Developer'){
        count[0]["Web Developer"] += 1;
    }else if (value === 'Refocus'){
        count[0].Refocus += 1;
    }else{
        count[0].Awesome += 1;
    }
});
console.log(count[0]);