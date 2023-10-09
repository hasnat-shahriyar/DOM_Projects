// Function to update the input number based on whether toIncrease is true or false
function updateInputNumber(toIncrease) {
    // Get the input field element with the id "case-input-field"
    const caseInputField = document.getElementById("case-input-field");

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
}

// Get the button element with the id "btn-plus"
document.getElementById("btn-plus").addEventListener("click", function() {
    // Call the updateInputNumber function with true to increase the input value
    updateInputNumber(true);
});

// Get the button element with the id "btn-minus"
document.getElementById("btn-minus").addEventListener("click", function() {
    // Call the updateInputNumber function with false to decrease the input value
    updateInputNumber(false);
});
