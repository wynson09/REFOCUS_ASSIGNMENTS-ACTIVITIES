var num = 10;
var totalSum = 0;
function IntergersSummation (){
    for (let i = 1; i <= 10; i++) {
        console.log(`${totalSum} + ${i}`);
        totalSum += i;
    }
}
IntergersSummation(num);
console.log(`The total summation is ${totalSum}`);