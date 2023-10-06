/*
1: Add Event Handler with the Withdraw Button
2: Get the Withdraw Amount From the Withdraw Input Field
2.5: Also make sure to convert the input into a number by using parseFloat
3: Get previous Withdraw Total
4: Calculate Total Amount & Total Withdraw Amount
5: Clear The Input Field
6: Get the Previous Balance Total
7: Calculate New Balance Total
8: Set the New Balance Total
*/

// Step 1: Add Event Handler with the Withdraw Button
document.getElementById("withdraw-btn").addEventListener("click", function() {
    // Step 2: Get the Withdraw Amount From the Withdraw Input Field
    const withdrawField = document.getElementById("withdraw-input");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // Step 3: Get the previous Withdraw Total
    const withdrawDisplayElement = document.getElementById("withdraw-display");
    const withdrawDisplayString = withdrawDisplayElement.innerText;
    const previousWithdrawDisplay = parseFloat(withdrawDisplayString);
    
    // Step 4: Calculate the new total withdrawal amount
    const currentWithdrawTotal = previousWithdrawDisplay + newWithdrawAmount;
    withdrawDisplayElement.innerText = currentWithdrawTotal;
    
    // Step 5: Clear the input field
    withdrawField.value = "";
    
    // Step 6: Get the Previous Balance Total
    const balanceTotalElement = document.getElementById("balance-display");
    const previousBalanceDisplayString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceDisplayString);
    
    // Step 7: Calculate New Balance Total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    // Step 8: Set the New Balance Total
    balanceTotalElement.innerText = newBalanceTotal;
})
