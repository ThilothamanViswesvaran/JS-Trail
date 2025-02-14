let purchaseamount = 99;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(`You're total amount is $${purchaseamount - purchaseamount * (discount/100)}`)

// condition ? codeIfTrue : codeIfFalse;