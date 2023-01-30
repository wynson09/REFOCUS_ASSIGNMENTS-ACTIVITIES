// bankaccount
bankAccount = {
    'bankAccoungID': Math.floor(Math.random() * Date.now()), // auto generated acount ID
    'accountNumber': Math.floor(Math.random() * 1000000000), // also auto generated account number
    'credentials': [
        {'username': 'Demonslayer', 'password': 258456, 'pin': 123},  
    ],
    'balance': 0,
    'createdAt': Date()
}
// additional function to display auto generated acount ID/number
// display date created
console.log('Bank acount ID: ' + bankAccount.bankAccoungID);
console.log('Bank acount number: ' + bankAccount.accountNumber);
console.log('Date created: ' + bankAccount.createdAt);
