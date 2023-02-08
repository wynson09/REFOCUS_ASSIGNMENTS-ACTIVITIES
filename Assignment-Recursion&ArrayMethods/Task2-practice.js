let InvoiceStack = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];


function insert_at_bottom(x) {
  if (InvoiceStack.length == 0) InvoiceStack.push(x);
  else {
    let a = InvoiceStack.pop();
    insert_at_bottom(x);
    InvoiceStack.push(a);
  }
}


function reverseStack() {
  if (InvoiceStack.length > 0) {
    let x = InvoiceStack.pop();
    reverseStack();
    insert_at_bottom(x);
  }
}


InvoiceStack.push("Invoice 004");
InvoiceStack.push("Invoice 003");
InvoiceStack.push("Invoice 002");
InvoiceStack.push("Invoice 001");


console.log(InvoiceStack.join(" "));
reverseStack();
console.log(InvoiceStack.join(" "));