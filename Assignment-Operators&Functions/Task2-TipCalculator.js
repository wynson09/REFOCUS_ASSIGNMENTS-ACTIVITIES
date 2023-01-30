function computeTip(totalBill){
    tempBill = totalBill * 0.1;
    return tempBill;
}
console.log(`The total tip is ₱`,computeTip(1000))