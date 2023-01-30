let InvoiceStack = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];


function insert_at_bottom(x) {
  if (InvoiceStack.length == 0) {
    InvoiceStack.push(x);
    console.log(x + ' lagay sa Invoice');
    console.log(InvoiceStack);
  }else {
    let a = InvoiceStack.pop();
    console.log(a + " Kuha 2nd ni");
    insert_at_bottom(x);
    InvoiceStack.push(a);
    console.log(a + " Add ni");
  }
}


function reverseStack() {
  if (InvoiceStack.length > 0) {
    let x = InvoiceStack.pop();
    console.log(x + ' Kuha ni');
    reverseStack();
    console.log('pass')
    insert_at_bottom(x);
    console.log('pass here ' + InvoiceStack)
  }
}


InvoiceStack.push("Invoice 004");
InvoiceStack.push("Invoice 003");
InvoiceStack.push("Invoice 002");
InvoiceStack.push("Invoice 001");


console.log(InvoiceStack.join(" "));
reverseStack();
console.log(InvoiceStack.join(" "));