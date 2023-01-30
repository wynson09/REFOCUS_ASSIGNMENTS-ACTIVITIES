let InvoiceList = [
    'Invoice 009',
    'Invoice 008',
    'Invoice 007',
    'Invoice 006',
    'Invoice 005',
];

function insertToBottom(InvoiceList,start,end) {
    if (start >= end){
        return;
    }else{
        [InvoiceList[start],InvoiceList[end]] = [InvoiceList[end], InvoiceList[start]];
        insertToBottom(InvoiceList, start + 1, end - 1 );
    }

}

function reverseList() {
    let size = InvoiceList.length;
    insertToBottom(InvoiceList ,0, size -1);
}
InvoiceList.push('Invoice 004');
InvoiceList.push('Invoice 003');
InvoiceList.push('Invoice 002');
InvoiceList.push('Invoice 001');
console.log('Original output:');
console.log(InvoiceList.join(" "));
reverseList();
console.log('Reverse output:');
console.log(InvoiceList.join(" "));