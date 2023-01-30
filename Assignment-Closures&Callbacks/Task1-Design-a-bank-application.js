function createBankAccount(name){
    let balance = 0;
    console.log('Thank you for creating a bank account Mr/Ms.' + name + ', your current balance is ₱' + balance);
    function depositAmount(amountDeposit,amountWithdraw){
        if(amountDeposit > 0){
        balance += amountDeposit;
        console.log('You deposited ₱' + amountDeposit.toLocaleString("en-US") + '. Your current balance is ₱'+ balance.toLocaleString("en-US"));      
        }
        if(amountWithdraw > 0){
            withdrawAmount(amountWithdraw);
        }
        function withdrawAmount(amountWithdraw){
            if(amountWithdraw < balance){
                balance -= amountWithdraw;
                console.log('\nYou withdraw ₱' + amountWithdraw.toLocaleString("en-US") + '! Your current balance is ₱' + balance.toLocaleString("en-US"))
            }else{
                console.log('\nThe amount you want to withdraw is ₱'+ amountWithdraw.toLocaleString("en-US")+ ' exceeded to your current balance ₱'+ balance.toLocaleString("en-US"));
            }
        }
        return withdrawAmount;
    }
    return depositAmount;
}
const openAccount = createBankAccount('Jayson');
openAccount(25000)
openAccount(50000)
openAccount(75000,5000)
openAccount(0,150000)