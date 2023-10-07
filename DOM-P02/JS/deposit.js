/*
1. Add Event Listener to the Deposit Button
2. Get Deposit Amount From the Deposit Input Field
2.5 Convert String Deposit Amount to a Number Type
3. Clear the Deposit Input Field After Getting The Value
4. Get the Previous Deposit Total
5. Calculate new Deposit Total and Set the Value to the Deposit Display
6. Get Current Balance on The Balance Display
7. Calculate the new Balance and Set it to the Balance Display 
*/

// Step 1
document.getElementById("deposit-btn").addEventListener("click", function(){
    // Step 2
    const depositInputField = document.getElementById("deposit-input");
    const newDepositAmountString = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step 3
    depositInputField.value = "";
    
    // Step 4
    const depositTotalElement = document.getElementById("deposit-display");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal; 
    /* ------------------------------------------ */
    // Step 6
    const balanceTotalElement = document.getElementById("balance-display");
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat (previousTotalBalanceString);
    // Step 7 
    const newTotalBalance = previousTotalBalance + newDepositTotal;
    balanceTotalElement.innerText = newTotalBalance;
})