let InvoiceList = [
    'Invoice 008',
    'Invoice 007',
    'Invoice 006',
    'Invoice 005',
];
let ArrInvoice = [];
function insertToBottom(i,end) { // recursion function that transfer InvoiceList end to ArrInvoice start
  if (i === InvoiceList.length) {
      return '';
  }
  else {
    ArrInvoice[i] = InvoiceList[end];
   return InvoiceList[i] + ' ' + insertToBottom(++i, end -1);
 }
}

function reverseList() {
    let size = InvoiceList.length; //declare a variable to determine the lenght of an array InvoiceList
    insertToBottom(0, size -1);
    InvoiceList = [];
    for(let i = 0; i < size ; i++){
        InvoiceList[i] = ArrInvoice[i];
    }
}
InvoiceList.push('Invoice 004');
InvoiceList.push('Invoice 003');
InvoiceList.push('Invoice 002');
InvoiceList.push('Invoice 001');

console.log('Original output:');
console.log(InvoiceList.join(" "));
reverseList();
console.log('Reverse output:');
console.log(ArrInvoice.join(" "));
console.log(InvoiceList.join(" "));