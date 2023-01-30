// bank account details
bankAccount = {
    'bankAccoungID': Math.floor(Math.random() * Date.now()), // auto generated acount ID
    'accountNumber': Math.floor(Math.random() * 1000000000), // also auto generated account number
    'credentials': [
        {'username': 'Demonslayer', 'password': 258456, 'pin': 123},  
    ],
    'balance': 0,
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
// Just to test if the ID is send to another object
console.log('Name: ' + userAccount.firstName + ' ' + userAccount.lastName);
console.log('Bank Account ID from bankAccount object: '+ bankAccount.bankAccoungID);
console.log('Bank account get from user account object: '+ userAccount.BankAccount);

