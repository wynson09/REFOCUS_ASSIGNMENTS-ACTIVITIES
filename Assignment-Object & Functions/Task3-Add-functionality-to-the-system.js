// bank account details
bankAccount = {
    'bankAccoungID': Math.floor(Math.random() * Date.now()), // auto generated acount ID
    'accountNumber': Math.floor(Math.random() * 1000000000), // also auto generated account number
    'credentials': [
        {'Username': 'Demonslayer', 'Password': 258456, 'Pin': 123}, 
    ],
    'balance': 1200000,
    'createdAt': Date()
}
//user account details
userAccount = {
    'BankAccount': bankAccount.bankAccoungID, // bank account is from object bankAccount in bankAccount ID
    'debitCard': bankAccount.accountNumber,
    'firstName': 'Tanjiro',
    'lastName': 'Kamado',
    'birthDate': 'April 6, 1999',
    'validID':[
        {'ID': 'Driver License', 'IDnumber': 123456789},
    ],
    'address': 'Kyoto, Japan'
}
// created a function that display the bank account details if
// the username and password are match
function getBankAccountDetails(username,password){ // Checking the username and password 
    if(((bankAccount.credentials[0].Username === username) && (bankAccount.credentials[0].Password === password))){
        console.log('Account ID:' + bankAccount.bankAccoungID);
        console.log('Account Number:' + bankAccount.accountNumber);
        console.log('Name: ' + userAccount.firstName + ' ' + userAccount.lastName);
        console.log('Balance: ¥ ' + bankAccount.balance.toLocaleString());
        console.log('Date the account created: ' + bankAccount.createdAt + '\n');
    }else{
        console.log('The Username and Password is incorrect!\n');
    }
}
// created a function that withdraw money if
// the username and password are match
function withdrawMoney(username,password,amountWithdraw){  // Checking the username and password 
    if(((bankAccount.credentials[0].Username === username) && (bankAccount.credentials[0].Password === password))){
        if(amountWithdraw < bankAccount.balance){
            let getMoney = bankAccount.balance - amountWithdraw;
            console.log('You withdraw ¥ '+ amountWithdraw.toLocaleString() + ' from Account Number: '+ bankAccount.accountNumber + '.');
            console.log('Your current balance is : ¥ ' + getMoney.toLocaleString() + '\n');
            bankAccount.balance = getMoney;
        }else{
            console.log('Sorry the amount you desire to withdraw exceed to your current balance!\n')
        }
    }else{
        console.log('The Username and Password is incorrect!\n');
    }
}
// created a function that deposit money if
// the account number match
function depositMoney(acntNumber,amountDeposit){
    if(acntNumber === bankAccount.accountNumber){
        bankAccount.balance += amountDeposit;
        console.log('You deposit ¥ ' + amountDeposit.toLocaleString() + ' to Account number: ' + bankAccount.accountNumber + '.');
        console.log('Your current balance is : ¥ ' + bankAccount.balance.toLocaleString() + '\n');
    }else{
        console.log('The Account number is incorrect!\n');
    }
    
}
getBankAccountDetails('Demonslayer',258456);
withdrawMoney('Demonslayer',258456,500000);
depositMoney(bankAccount.accountNumber,1000000);