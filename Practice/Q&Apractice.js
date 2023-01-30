const number = [[1,2,3],[14,5,6],[7,8,9]];
let MaxNumber = 0;

for(let i = 0; i < number.length; i++){
    for(let j = 0; j < number[i].length; j++){
        if(MaxNumber < number[i][j]){
            MaxNumber = number[i][j];
            console.log(number[i][j]);
        }
    }
}

console.log('The maximum number is '+ MaxNumber);