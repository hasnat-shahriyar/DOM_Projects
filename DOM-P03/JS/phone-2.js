// Function to update the input field value
function updateInputNumbers(isIncrease) {
    const numberInputField = document.getElementById("case-input-field");
    const numberInputString = numberInputField.value;
    const previousNumberInput = parseInt(numberInputString);
    let newNumberInput;
    if (isIncrease) {
        newNumberInput = previousNumberInput + 1;
    } else {
        // Ensure the value doesn't go below 0
        newNumberInput = Math.max(previousNumberInput - 1, 0);
    }
    numberInputField.value = newNumberInput;
    return newNumberInput;
}

// Function to update the total price based on the input value
function updateInputTotalPrice(newNumberInput) {
    const numberTotalPrice = newNumberInput * 39; // Assuming the price per item is $39
    const numberTotalElement = document.getElementById("case-price-total");
    numberTotalElement.innerText = numberTotalPrice;
}

// Add an event listener to the "case-btn-plus" button
document.getElementById("case-btn-plus").addEventListener("click", function () {
    const newNumberInput = updateInputNumbers(true);
    updateInputTotalPrice(newNumberInput);
    calculateSubTotal();
});

// Add an event listener to the "case-btn-minus" button
document.getElementById("case-btn-minus").addEventListener("click", function () {
    const newNumberInput = updateInputNumbers(false);
    updateInputTotalPrice(newNumberInput);
    calculateSubTotal ();
});
