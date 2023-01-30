let start = 1;
let end = 100;
function countNumbersDivisibleBy3And5(start,end){
    let countMulplesNum = 0;
    for (let i = start; i <= end; i++) {
        if (((i % 3) === 0) && ((i % 5) === 0)) {
            countMulplesNum = countMulplesNum + 1
            console.log(`${i} is divisible by 3 and 5`)
        }
        
    }
    console.log(`The total numbers divisible by 3 and 5 is ${countMulplesNum}`);
}
countNumbersDivisibleBy3And5(start,end);