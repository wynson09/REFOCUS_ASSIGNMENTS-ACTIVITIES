let customer = {
    customer_name: 'Johnny Manggo',
    points: 12300,
    cart: [
        {
            item: 'Shampoo',
            quantity: 2,
            price_$: 3
        },
        {
            item: 'Soap',
            quantity: 2,
            price_$: 2
        },
        {
            item: 'Toothpaste',
            quantity: 1,
            price_$: 3
        }
    ],
    purchase_item: function (){
        let totalBill = 0;
        let addPoints = 0;
        console.log('Purchased Items:');
        for(let i = 0; i < this.cart.length; i++ ){
            let bill = this.cart[i].quantity * this.cart[i].price_$;
            console.log(`${this.cart[i].quantity}x ${this.cart[i].item} ---- $ ${bill.toFixed(2)}`);
            totalBill += bill;
            addPoints += this.cart[i].quantity;
        }
        this.points += addPoints;
        console.log(`Total Bill: $ ${totalBill.toFixed(2)}`);
        console.log(`New Current Points: ${this.points}`);
    }
}

console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`);
console.log(`Your current points: ${customer.points}`);
customer.purchase_item();
