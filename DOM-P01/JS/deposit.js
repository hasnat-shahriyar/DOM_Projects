// Step 1: Add Event Listener
document.getElementById("deposit-btn").addEventListener("click", function() {
    // Step 2: Get the deposit amount from the Deposit Input Field
    const depositField = document.getElementById("deposit-input");
    // For Input Field, use .value to get the value inside the input field
    const newDepositAmountString = depositField.value;
    // Convert the entered amount to a floating-point number
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // Step 3: Get the current Deposit Total Display Element
    const depositDisplayElement = document.getElementById("deposit-display");
    // Get the current Deposit Total amount from the Display Element
    const previousDepositDisplayString = depositDisplayElement.innerText;
    // Convert the previous display amount to a floating-point number
    const previousDepositDisplay = parseFloat(previousDepositDisplayString);
    
    // Step 4: Calculate the new total deposit amount
    const currentDepositDisplay = previousDepositDisplay + newDepositAmount;
    // Update the Deposit Total with the new deposit amount
    depositDisplayElement.innerText = currentDepositDisplay;

    // Step 5: Clear the Deposit Field after processing
    depositField.value = "";
    
    /* ---------------------------------------------- */
    
    // Step 6: Get the Balance Current Total
    const balanceTotal = document.getElementById("balance-display");
    // Get the current Balance Total amount from the Display Element
    const previousBalanceTotalString = balanceTotal.innerText;
    // Convert the previous balance amount to a floating-point number
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // Step 7: Calculate Current Total Balance
    const currentTotalBalance = previousBalanceTotal + newDepositAmount;
    // Update the Balance Total with the new deposit amount
    balanceTotal.innerText = currentTotalBalance;
})
