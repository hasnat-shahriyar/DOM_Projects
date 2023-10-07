/*
1. Add Event Listener to the Withdraw Button
2. Get Withdraw Amount From the Withdraw Input Field
2.5 Convert String Withdraw Amount to a Number Type
3. Clear the Withdraw Input Field After Getting The Value
4. Get the Previous Withdraw Total
5. Calculate new Withdraw Total and Set the Value to the Withdraw Display
6. Get Current Balance on The Balance Display
7. Calculate the new Balance and Set it to the Balance Display 
*/

// Step 1
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // Step 2
    const withdrawInputField = document.getElementById("withdraw-input");
    const newWithdrawAmountString = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // Step 3
    withdrawInputField.value = "";
    
    // Step 4
    const withdrawTotalElement = document.getElementById("withdraw-display");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // Step 5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal; 
    /* ------------------------------------------ */
    // Step 6
    const balanceTotalElement = document.getElementById("balance-display");
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat (previousTotalBalanceString);
    // Step 7 
    const newTotalBalance = previousTotalBalance - newWithdrawTotal;
    balanceTotalElement.innerText = newTotalBalance;
})