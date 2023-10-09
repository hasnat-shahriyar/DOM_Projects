// Function to update the input number based on whether toIncrease is true or false
function updateInputNumber(toIncrease) {
    // Get the input field element with the id "input-field1"
    const caseInputField = document.getElementById("input-field1");

    // Get the current value of the input field as a string
    const caseInputString = caseInputField.value;

    // Convert the string to an integer (assuming it contains a valid number)
    const previousCaseInput = parseInt(caseInputString);

    let newCaseInput;

    // Check if toIncrease is true or false to determine whether to increment or decrement
    if (toIncrease === true) {
        newCaseInput = previousCaseInput + 1;
    } else {
        // Prevent the value from going below 0
        newCaseInput = Math.max(previousCaseInput - 1, 0);
    }

    // Update the input field with the new value
    caseInputField.value = newCaseInput;

    // Return the new input value
    return newCaseInput;
}

// Function to update the total price based on the input value
function updateInputTotalNumber(newCaseInput) {
    const caseTotalPrice = newCaseInput * 310; // Assuming the price per case is $310
    const caseTotalElement = document.getElementById("price-total");
    caseTotalElement.innerText = caseTotalPrice;
}

// Get the button element with the id "btn-plus"
document.getElementById("btn-plus1").addEventListener("click", function() {
    // Call the updateInputNumber function with true to increase the input value
    const newCaseInput = updateInputNumber(true);
    updateInputTotalNumber(newCaseInput);
    calculateSubTotal();
});

// Get the button element with the id "btn-minus"
document.getElementById("btn-minus1").addEventListener("click", function() {
    // Call the updateInputNumber function with false to decrease the input value
    const newCaseInput = updateInputNumber(false);
    updateInputTotalNumber(newCaseInput);
    calculateSubTotal();
});
