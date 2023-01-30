let balance = 0;
function createBankAccount(name,amountDeposit,callback){
    console.log('Thank you for creating a bank account Mr/Ms.' + name + ', your current balance is ₱' + balance);
    callback(name,amountDeposit);
}

function depositAmount(name,amountDeposit){
    balance += amountDeposit;
    console.log('You deposited ₱' + amountDeposit.toLocaleString("en-US") + '. Your current balance is ₱'+ balance.toLocaleString("en-US"));      
    return balance;
    
}
function getAmount(amountWithdraw){
    if(amountWithdraw < balance){
        balance -= amountWithdraw;
        console.log('\nYou withdraw ₱' + amountWithdraw.toLocaleString("en-US") + '! Your current balance is ₱' + balance.toLocaleString("en-US"))
    }else{
        console.log('\nThe amount you want to withdraw is ₱'+ amountWithdraw.toLocaleString("en-US")+ ' exceeded to your current balance ₱'+ balance.toLocaleString("en-US"));
    }
    return getAmount;
}


createBankAccount('Jayson',25000,depositAmount)
let withdraw = getAmount(5000);
withdraw(1000)
