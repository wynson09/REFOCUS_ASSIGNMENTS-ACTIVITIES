let value = [[1,2,3],[4,5,6,20],[7,8,9]];

function findHighestNum (value) {
    let highestNum = 0;
    let temp = [];
    for(num of value){
        for(highest of num){
            if(highestNum < highest){
                highestNum = highest;
            }
        }
    }
    console.log(`The highest number is ${highestNum}`);
}
findHighestNum(value);